import fs from "fs-extra";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DESTINATION = path.join(__dirname, "../svgl");
const INPUT_FILE = pathToFileURL(path.join(DESTINATION, "svgs.js")).href; // Convert to file URL for import()
const OUTPUT_FILE = path.join(__dirname, "../../src/icons.json"); // Output file
const SVG_FOLDER = path.join(DESTINATION, "library"); // Folder where SVGs are stored

// Read existing icons.json if it exists
const existingIcons = fs.existsSync(OUTPUT_FILE)
  ? JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf-8"))
  : [];

// Helper function to read SVG content from a file
const getSvgContent = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8"); // Read and return content
    } else {
      console.warn(`⚠️ Missing SVG file: ${filePath}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error reading file ${filePath}:`, error);
    return null;
  }
};

// Function to check if an icon already exists (by title & SVG content)
const iconExists = (title, newIcon) => {
  return existingIcons.some(
    (existingIcon) =>
      existingIcon.title.toLowerCase() === title.toLowerCase() &&
      existingIcon.icon.light === newIcon.icon.light &&
      existingIcon.icon.dark === newIcon.icon.dark
  );
};

// Function to process SVG metadata and replace routes with actual content
export const processSvgFiles = async () => {
  try {
    // Import the TypeScript module dynamically
    const { svgs } = await import(INPUT_FILE);

    if (!svgs || !Array.isArray(svgs)) {
      console.error("❌ Invalid SVG data format.");
      return;
    }

    const processedData = svgs.map((svg) => {
      const processedSvg = { ...svg };

      // Replace `route` with actual SVG content
      if (typeof svg.route === "object") {
        processedSvg.route = {
          light: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.route.light))) || "",
          dark: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.route.dark))) || "",
        };
      } else if (typeof svg.route === "string") {
        processedSvg.route = { light: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.route))) || "" };
      }

      // Replace `wordmark` with content (if available)
      if (typeof svg.wordmark === "object") {
        processedSvg.wordmark = {
          light: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.wordmark.light))) || "",
          dark: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.wordmark.dark))) || "",
        };
      } else if (typeof svg.wordmark === "string") {
        processedSvg.wordmark = { light: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.wordmark))) || "" };
      }

      return processedSvg;
    });

    const jsonFormat = JSON.stringify(processedData, null, 2);
    const icons = JSON.parse(jsonFormat);

    // Process the icons
    const transformedIcons = [];

    icons.forEach((icon) => {
      let iconData = {};

      if (icon.route?.light && icon.route?.dark) {
        iconData = { light: icon.route.light, dark: icon.route.dark };
      } else if (icon.route) {
        iconData = { light: icon.route.light };
      }

      const newIconEntry = {
        title: icon.title,
        category: icon.category,
        icon: iconData,
        url: icon.url,
        other_names:[],
      };

      // If the icon doesn't exist, add it
      if (!iconExists(icon.title, newIconEntry)) {
        transformedIcons.push(newIconEntry);
      }

      // Process other_names (aliases)
      if (icon.other_names && Array.isArray(icon.other_names)) {
        icon.other_names.forEach((alias) => {
          if (!iconExists(alias, newIconEntry)) {
            transformedIcons.push({ ...newIconEntry, title: alias });
          }
        });
      }
    });

    // Merge new icons with existing ones
    const finalIcons = [...existingIcons, ...transformedIcons];

    // Write the new object to a file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalIcons, null, 2));
    console.log(`✅ Processed SVG content saved to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error("❌ Error processing SVG files:", error);
  }
};

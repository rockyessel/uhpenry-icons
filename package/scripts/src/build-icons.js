import fs from "fs-extra";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DESTINATION = path.join(__dirname, "../svgl");
const INPUT_FILE = pathToFileURL(path.join(DESTINATION, "svgs.js")).href; // Convert to file URL for import()
const OUTPUT_FILE = path.join("package", "../../src", "icons.json"); // Output file
const SVG_FOLDER = path.join(DESTINATION, "library"); // Folder where SVGs are stored

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

            // Replace `route` with content
            if (typeof svg.route === "object") {
                processedSvg.route = {
                    light: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.route.light))) || "",
                    dark: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.route.dark))) || "",
                };
            } else if (typeof svg.route === "string") {
                processedSvg.route = getSvgContent(path.join(SVG_FOLDER, path.basename(svg.route))) || "";
            }

            // Replace `wordmark` with content (if available)
            if (typeof svg.wordmark === "object") {
                processedSvg.wordmark = {
                    light: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.wordmark.light))) || "",
                    dark: getSvgContent(path.join(SVG_FOLDER, path.basename(svg.wordmark.dark))) || "",
                };
            } else if (typeof svg.wordmark === "string") {
                processedSvg.wordmark = getSvgContent(path.join(SVG_FOLDER, path.basename(svg.wordmark))) || "";
            }

            return processedSvg;
        });

        // Write the new object to a file
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(processedData, null, 2));
        console.log(`✅ Processed SVG content saved to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error("❌ Error processing SVG files:", error);
    }
};


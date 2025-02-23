import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// Get the current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const REPO = "svgl";
const BRANCH = "main";
const GITHUB_USER = "pheralb";
const DESTINATION = path.join(__dirname, "../svgl");

// Files to merge
const TYPE_FILES = [
  "src/types/svg.ts",
  "src/types/categories.ts",
];

const OUTPUT_TYPE_FILE = path.join(DESTINATION, "types.ts");

// Other files
const SVGS_FILE_PATH = "src/data/svgs.ts";
const SVG_LIBRARY_PATH = "static/library"; // Folder with SVGs

// Helper function to fetch JSON
const fetchFiles = async (url) => {
  const response = await fetch(url);
  return response.json();
}

// Download and merge type files
const downloadAndMergeTypes = async () => {
  let mergedContent = "";

  for (const filePath of TYPE_FILES) {
    const API_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO}/${BRANCH}/${filePath}`;
    console.log(`Fetching: ${filePath}`);

    const response = await fetch(API_URL);
    if (!response.ok) {
      console.error(`❌ Failed to fetch ${filePath}`);
      continue;
    }

    const content = await response.text();
    mergedContent += `// ---- START OF ${filePath} ----\n` + content + `\n// ---- END OF ${filePath} ----\n\n`;
  }

  await fs.ensureDir(DESTINATION);
  fs.writeFileSync(OUTPUT_TYPE_FILE, mergedContent);
  console.log(`✅ Merged type files saved to ${OUTPUT_TYPE_FILE}`);
}

// Download SVG array object
const downloadSvgArray = async () => {
  const API_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO}/${BRANCH}/${SVGS_FILE_PATH}`;
  console.log(`Fetching: ${SVGS_FILE_PATH}`);

  const response = await fetch(API_URL);
  if (!response.ok) {
    console.error(`❌ Failed to fetch ${SVGS_FILE_PATH}`);
    return;
  }

  const content = await response.text();
  const outputFilePath = path.join(DESTINATION, "svgs.js");

  console.log({ content });

  fs.writeFileSync(outputFilePath, content.replace(/import type \{.*?\};?\n?/s, '').replace(/ from ['"].*?['"];/, '').replace(/: iSVG\[\]/g, ''));
  console.log(`✅ SVG array saved to ${outputFilePath}`);
}

// Download all SVG files from library (properly skipping existing files)
const downloadSvgFiles = async () => {
  const API_URL = `https://api.github.com/repos/${GITHUB_USER}/${REPO}/contents/${SVG_LIBRARY_PATH}?ref=${BRANCH}`;
  console.log(`Fetching SVG list from: ${SVG_LIBRARY_PATH}`);

  const files = await fetchFiles(API_URL);
  if (!Array.isArray(files)) {
    console.error("❌ Failed to fetch SVG files.");
    return;
  }

  const svgFolder = path.join(DESTINATION, "library");
  await fs.ensureDir(svgFolder);

  for (const file of files) {
    if (file.name.endsWith(".svg")) {
      const filePath = path.join(svgFolder, file.name);

      // ✅ Check if file exists before downloading
      if (fs.existsSync(filePath)) {
        console.log(`⏩ Skipping (already exists): ${file.name}`);
        continue; // Skip downloading
      }

      try {
        console.log(`⬇️ Downloading: ${file.name}`);
        const fileResponse = await fetch(file.download_url);

        if (!fileResponse.ok) {
          console.error(`❌ Failed to download: ${file.name}`);
          continue;
        }

        fs.writeFileSync(filePath, await fileResponse.buffer());
        console.log(`✅ Saved: ${file.name}`);
      } catch (error) {
        console.error(`⚠️ Error downloading ${file.name}:`, error.message);
      }
    }
  }

  console.log(`✅ All new SVGs downloaded to ${svgFolder}`);
}


export const sync = async () => {
  await downloadAndMergeTypes();
  await downloadSvgArray();
  await downloadSvgFiles();
}

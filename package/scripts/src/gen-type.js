import fs from "fs-extra";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_JSON = path.join(__dirname, "../../src/icons.json");
const TYPES_FILE = path.join(__dirname, "../../src/types/index.ts");

export const generateIconTypes = async () => {
    try {
        // Read and parse the icons JSON
        const icons = JSON.parse(await fs.readFile(ICON_JSON, 'utf8'));

        // Extract names from icons (title + other_names)
        const iconNames = icons.reduce((names, icon) => {
            names.push(icon.title);
            if (icon.other_names && icon.other_names.length) {
                names.push(...icon.other_names);
            }
            return names;
        }, []);

        // Create the type string
        const typeContent = `export type IconNames = '${iconNames.join("' | '")}';`;

        // Check if file exists and read its content
        let existingContent = '';
        try {
            existingContent = await fs.readFile(TYPES_FILE, 'utf8');
        } catch (err) {
            // File doesn't exist, create new
            await fs.writeFile(TYPES_FILE, typeContent);
            console.log('✅ Created new types file with IconNames type');
            return;
        }

        // If file exists, check for IconNames type
        if (existingContent.includes('type IconNames')) {
            // Replace existing IconNames type
            const newContent = existingContent.replace(
                /export type IconNames = .*?;/s,
                typeContent
            );
            await fs.writeFile(TYPES_FILE, newContent);
            console.log('✅ Updated existing IconNames type');
        } else {
            // Append new type to existing file
            const newContent = existingContent + '\n\n' + typeContent;
            await fs.writeFile(TYPES_FILE, newContent);
            console.log('✅ Added IconNames type to existing file');
        }
    } catch (error) {
        console.error('❌ Error generating types:', error);
    }
};

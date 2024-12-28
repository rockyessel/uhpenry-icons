import fs from 'fs';
import path from 'path';
import { camelize } from '@cpmech/basic';
import { ICON_DIR, NATIVE_ATTR, SVG_DIR } from './utils/constants.mjs';
import { convertSvgToReact, ensureDirectoryExists, fileExists, isCol, toPascalCase } from './utils/helpers.mjs';
import { generateComponent, generateIndexFile } from './utils/services.mjs';



/**
 * Processes and generates React components for all SVG files in the given directory.
 */
const processSvgFiles = async () => {
    // Ensure ICON_DIR exists
    await ensureDirectoryExists(ICON_DIR);

    try {
        // Read all files from SVG_DIR
        const svgFiles = await fs.promises.readdir(SVG_DIR);

        // Process each SVG file
        for (const file of svgFiles) {
            const extname = path.extname(file).toLowerCase();
            if (extname === '.svg') {
                const componentName = toPascalCase(file);
                const componentFilePath = path.join(ICON_DIR, `${componentName}.tsx`);

                // Skip if component file already exists
                if (await fileExists(componentFilePath)) {
                    console.log(`Component for ${file} already exists. Skipping...`);
                    continue;
                }

                // Read the SVG content asynchronously
                const svgContent = await fs.promises.readFile(path.join(SVG_DIR, file), 'utf-8');

                // Prepare replacements for native attributes
                const replacements = NATIVE_ATTR.map((p) => ({
                    from: p,
                    to: camelize(p, false, isCol(p) ? ':' : '-'),
                    rx: new RegExp(p.replace(':', '\\:'), 'mg'),
                }));

                // Apply replacements to SVG content
                const pureReactSvg = replacements.reduce((acc, curr) => acc.replace(curr.rx, curr.to), svgContent);

                // Generate the React component content
                const componentContent = generateComponent(componentName, convertSvgToReact(pureReactSvg));

                // Write the component file asynchronously
                await fs.promises.writeFile(componentFilePath, componentContent.trim());
                console.log(`Generated component: ${componentName}`);
            }
        }

        // Generate the index file after processing all SVG files
        generateIndexFile();

    } catch (err) {
        console.error('Error processing SVG files:', err);
    }
};



// Run the SVG processing function
processSvgFiles();

import fs from 'fs';
import path from 'path';
import { ICON_DIR, INDEX_FILE } from './constants.mjs';

/**
 * Generates a React component from the provided SVG content.
 * - Converts the SVG content into a functional React component.
 * - The component uses the `forwardRef` API to pass a ref to the SVG element.
 * - The component accepts a `size` prop to control the width and height of the SVG.
 *
 * @param {string} name - The name of the component (e.g., 'MyIcon').
 * @param {string} svgContent - The SVG content to embed in the component.
 * @returns {string} The generated React component code as a string.
 */
export const generateComponent = (name, svgContent) => {
  console.log({ svgContent })
  // Extract the viewBox attribute from the SVG content
  const viewBoxMatch = svgContent.match(/<svg[^>]*\sviewBox=['"]([^'"]+)['"]/);
  const viewBox = viewBoxMatch ? `viewBox="${viewBoxMatch[1]}"` : '';

  // Generate the React component
  return `
import * as React from 'react';
import { IconProps } from '../types';

export const ${name} = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    ${svgContent.replace(
    /<svg([^>]*)>/,
    `<svg 
        width={size} 
        height={size} 
        ${viewBox} 
        {...props} 
        ref={forwardedRef}>`
  )}
  )
);

${name}.displayName = '${name}';
`;
};


/**
 * Generates an `index.ts` file for exporting all icon components.
 * - Reads all `.tsx` files in the `ICON_DIR` directory.
 * - Filters out non-TypeScript files and generates export statements for each icon component.
 * - Writes the export statements to the `INDEX_FILE`.
 *
 * @returns {void}
 */
export const generateIndexFile = () => {
  // Read all files in the components directory
  const files = fs.readdirSync(ICON_DIR);

  // Filter out files that are not TypeScript files or don't match the component naming pattern
  const icons = files
    .filter((file) => file.endsWith('.tsx')) // Only include .tsx files
    .map((file) => path.basename(file, '.tsx')); // Get the component name without the .tsx extension

  // Create export statements for each component
  const exports = icons
    .map((component) => `export { ${component} } from './${component}';`)
    .join('\n');

  // Check if index.ts exists and override or create it
  fs.writeFileSync(INDEX_FILE, exports, { encoding: 'utf8' });

  console.log(`Index file updated at ${INDEX_FILE}`);
};

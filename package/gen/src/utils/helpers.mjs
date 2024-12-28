import fs from 'fs'

/**
 * Converts a string to PascalCase format.
 * - Capitalizes the first letter of each word.
 * - Replaces hyphens (`-`) or underscores (`_`) with uppercase letters.
 * - Appends 'Icon' to the end of the string if it ends with `.svg`.
 * 
 * @param {string} str - The string to convert.
 * @returns {string} The converted string in PascalCase.
 */
export const toPascalCase = (str) =>
    str
        .replace(/[-_](.)/g, (_, char) => char.toUpperCase())  // Convert hyphen or underscore followed by a character to uppercase
        .replace(/^(.)/, (_, char) => char.toUpperCase())      // Capitalize the first letter of the string
        .replace(/\.svg$/i, 'Icon');                           // Append 'Icon' if the string ends with '.svg'


/**
 * Checks if the input string contains a colon (`:`).
 * This function is typically used to check for namespaced attributes (e.g., `xlink:href`).
 * 
 * @param {string} p - The string to check.
 * @returns {boolean} `true` if the string contains a colon, otherwise `false`.
 */
export const isCol = (p) => p.includes(':');


/**
 * Converts an SVG content string to a React-compatible format.
 * - Replaces the inline `style` attribute in SVG with a React-style object.
 * - Converts the CSS styles from a string to a JavaScript object in camelCase format.
 * 
 * @param {string} svgContent - The SVG content as a string.
 * @returns {string} The converted SVG content in React-compatible format.
 */
export const convertSvgToReact = (svgContent) => {
    // Regex to match style attribute in SVG
    const styleRegex = /style=['"]([^'"]*)['"]/g;

    /**
     * Converts a CSS style string to a React style object.
     * - Splits the string by semicolons (`;`) to separate individual styles.
     * - Converts each style property to camelCase and adds it to an object.
     * 
     * @param {string} styleString - The CSS style string.
     * @returns {Object} The style object in camelCase format.
     */
    const convertStyleToObject = (styleString) => {
        return styleString.split(";").reduce((styleObj, styleProp) => {
            if (!styleProp.trim()) return styleObj; // Skip empty style properties
            const [key, value] = styleProp.split(":").map((s) => s.trim());  // Split the property into key and value
            const camelCaseKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());  // Convert key to camelCase
            styleObj[camelCaseKey] = value;  // Add the property to the object
            return styleObj;
        }, {});
    };

    // Replace style attribute with React style object
    const convertedSvg = svgContent.replace(styleRegex, (_, styleString) => {
        const styleObject = convertStyleToObject(styleString);  // Convert the style string to an object
        return `style={${JSON.stringify(styleObject)}}`;  // Return the React-compatible style object
    });

    return convertedSvg;
}


/**
 * Checks if a file exists asynchronously.
 * @param {string} filePath The path of the file to check.
 * @returns {Promise<boolean>} Returns true if the file exists, false otherwise.
 */
export const fileExists = async (filePath) => {
    try {
        await fs.promises.access(filePath);
        return true;
    } catch {
        return false;
    }
};


/**
 * Asynchronously ensure the directory exists, creating it if necessary.
 * @param {string} dirPath The path of the directory.
 */
export const ensureDirectoryExists = async (dirPath) => {
    try {
        await fs.promises.mkdir(dirPath, { recursive: true });
    } catch (err) {
        console.error(`Error creating directory ${dirPath}:`, err);
    }
};
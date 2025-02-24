import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 * The path to the directory containing the SVG logo files.
 * It resolves the path relative to the current file's directory.
 */
export const SVG_DIR = path.resolve(__dirname, '../../logo-svgs');

/**
 * The path to the directory containing the icons in the source code.
 * This directory will hold the generated or pre-existing icon files.
 */
export const ICON_DIR = path.resolve(__dirname, '../../../src/icons');

/**
 * The path to the `index.ts` file inside the icons directory.
 * This file will typically export all icons from the icons directory.
 */
export const INDEX_FILE = path.join(ICON_DIR, 'index.ts');



/**
 * A list of native attributes commonly used in SVG elements.
 * These attributes control various visual properties of SVG elements.
 */
export const NATIVE_ATTR = [
    'clip-path',                // Defines a clipping path for an element.
    'color-interpolation-filters', // Defines how colors are interpolated in filters.
    'fill-opacity',             // Specifies the opacity of the fill color.
    'fill-rule',                // Defines the algorithm for determining the interior of a shape.
    'clip-rule',                // Defines the rule for clipping paths.
    'stop-color',               // Specifies the color of a gradient stop.
    'stop-opacity',             // Specifies the opacity of a gradient stop.
    'stroke-width',             // Specifies the width of the stroke (outline).
    'stroke-linejoin',         // Defines how two connected segments of a stroke are joined.
    'stroke-miterlimit',       // Specifies the limit on the length of a miter join.
    'stroke-linecap',          // Specifies the shape of the end of a stroke.
    'xmlns:xlink',             // Declares the XML namespace for xlink.
    'xlink:href',              // Specifies the URI of a resource to link to in an SVG.
    'xml:space'
];
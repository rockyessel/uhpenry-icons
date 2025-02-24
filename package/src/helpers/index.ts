import { SVGElementData, IIconLibrary, IconNames } from '../types';
import { ICON_LIBRARY, NATIVE_ATTR, SVG_SPECIAL_CASES } from '../constants';
import { XMLParser } from 'fast-xml-parser';

export const isCol = (p: string): boolean => p.includes(':');

export const camelize = (
  str: string,
  pascal = false,
  separator = '-'
): string => {
  const camelized = str
    .split(separator)
    .map((word, index) =>
      index === 0 && !pascal
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');

  // Check if the camelized string matches any special cases
  const lowerCased = camelized.toLowerCase();
  if (SVG_SPECIAL_CASES[lowerCased]) {
    return SVG_SPECIAL_CASES[lowerCased];
  }

  return camelized;
};

export const convertStyleToObject = (
  styleString: string
): Record<string, string> => {
  return styleString
    .split(';')
    .reduce((styleObj: Record<string, string>, styleProp) => {
      if (!styleProp.trim()) return styleObj;
      const [key, value] = styleProp.split(':').map((s) => s.trim());
      if (key && value) {
        const camelCaseKey = camelize(key);
        styleObj[camelCaseKey] = value;
      }
      return styleObj;
    }, {});
};

export const convertPropsToReact = (
  props: Record<string, string>
): Record<string, any> => {
  const reactProps: Record<string, any> = {};

  for (const [key, value] of Object.entries(props)) {
    // Handle style attribute
    if (key === 'style') {
      reactProps.style = convertStyleToObject(value);
      continue;
    }

    // Handle native SVG attributes
    const nativeAttr = NATIVE_ATTR.find((attr) => attr === key);
    if (nativeAttr) {
      const reactKey = camelize(
        nativeAttr,
        false,
        isCol(nativeAttr) ? ':' : '-'
      );
      reactProps[reactKey] = value;
      continue;
    }

    // Handle regular attributes with proper casing
    reactProps[camelize(key)] = value;
  }

  return reactProps;
};

const parser = new XMLParser({
  ignoreAttributes: false, // Keep attributes
  attributeNamePrefix: '', // Avoid prefixes like @
});

export const extractElementAttributes = (element: any): SVGElementData => {
  const props: Record<string, any> = {};

  // Convert attributes to React props
  if (element['@_']) {
    Object.entries(element['@_']).forEach(([key, value]) => {
      props[camelize(key)] = value;
    });
  }

  // Get all child elements recursively
  const children = Object.entries(element)
    .filter(([key]) => key !== '@_') // Ignore attributes object
    .map(([key, value]) => ({
      type: key,
      props: {},
      children: Array.isArray(value) ? value.map(extractElementAttributes) : [],
    }));

  return { type: element.tagName?.toLowerCase() ?? 'unknown', props, children };
};

export const extractSVGAttributes = (svgString?: string) => {
  if (!svgString) return null;
  const parsedSVG = parser.parse(svgString);

  if (!parsedSVG.svg) return null;

  const props: Record<string, string> = parsedSVG.svg['@_'] || {};
  const elements = Object.entries(parsedSVG.svg)
    .filter(([key]) => key !== '@_')
    .map(([key, value]) => ({
      type: key,
      props: {},
      children: Array.isArray(value) ? value.map(extractElementAttributes) : [],
    }));

  return {
    type: 'svg',
    props: convertPropsToReact(props),
    elements,
  };
};

export const convertSvgToReact = (svgContent: string) => {
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
  const convertStyleToObject = (
    styleString: string
  ): Record<string, string> => {
    return styleString
      .split(';')
      .reduce((styleObj: Record<string, string>, styleProp) => {
        if (!styleProp.trim()) return styleObj; // Skip empty style properties
        const [key, value] = styleProp.split(':').map((s) => s.trim()); // Split the property into key and value
        const camelCaseKey = key.replace(/-([a-z])/g, (_, char) =>
          char.toUpperCase()
        ); // Convert key to camelCase
        styleObj[camelCaseKey] = value; // Add the property to the object
        return styleObj;
      }, {});
  };

  // Replace style attribute with React style object
  const convertedSvg = svgContent.replace(styleRegex, (_, styleString) => {
    const styleObject = convertStyleToObject(styleString); // Convert the style string to an object
    return `style={${JSON.stringify(styleObject)}}`; // Return the React-compatible style object
  });

  return convertedSvg;
};

/**
 * Retrieves an icon from the icon library based on the provided name.
 * The function uses a case-insensitive match to find an icon that corresponds to the name.
 * If no match is found, it returns a default icon if provided, or a fallback default icon.
 *
 * @param {IconNames} name - The name of the icon to retrieve. This is the name that will be matched in the icon library.
 * @param {IconNames} [defaultOption] - An optional fallback icon name to return if no match is found. If not provided, the function returns a default icon.
 */
export const getIcon = (
  name: IconNames,
  defaultOption?: IconNames
): IIconLibrary | undefined => {
  const regex = new RegExp(`^${name}$`, 'i'); // Case-insensitive exact match

  for (const iconData of ICON_LIBRARY) {
    if (
      regex.test(iconData.title) ||
      iconData.other_names.some((alt) => regex.test(alt))
    ) {
      return iconData;
    }
  }

  // Return default icon if provided, otherwise fallback to 'default'
  return defaultOption
    ? ICON_LIBRARY.find((icon) => icon.title === defaultOption)
    : ICON_LIBRARY.find((icon) => icon.title === 'Cobol');
};

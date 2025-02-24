import React from 'react';
import iconsData from '../icons.json';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  theme: 'light' | 'dark';
}

// Special case attributes that need specific casing
const SVG_SPECIAL_CASES: Record<string, string> = {
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  strokewidth: 'strokeWidth',
  strokelinecap: 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  strokedasharray: 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  stopcolor: 'stopColor',
  stopopacity: 'stopOpacity',
  fillrule: 'fillRule',
  cliprule: 'clipRule',
  clippath: 'clipPath',
  fontfamily: 'fontFamily',
  fontsize: 'fontSize',
  fontstyle: 'fontStyle',
  fontweight: 'fontWeight',
  textalign: 'textAlign',
  textanchor: 'textAnchor',
  dominantbaseline: 'dominantBaseline',
};

const NATIVE_ATTR = [
  'clip-path',
  'color-interpolation-filters',
  'fill-opacity',
  'fill-rule',
  'clip-rule',
  'stop-color',
  'stop-opacity',
  'stroke-width',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-linecap',
  'xmlns:xlink',
  'xlink:href',
  'xml:space',
] as const;

const isCol = (p: string): boolean => p.includes(':');

const camelize = (str: string, pascal = false, separator = '-'): string => {
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

const convertStyleToObject = (styleString: string): Record<string, string> => {
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

const convertPropsToReact = (
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

interface SVGElementData {
  type: string;
  props: Record<string, any>;
  children: SVGElementData[];
}

const extractElementAttributes = (element: Element): SVGElementData => {
  const props: Record<string, any> = {};

  // Convert attributes to React props with correct casing
  Array.from(element.attributes).forEach((attr) => {
    const reactKey = camelize(attr.name);
    props[reactKey] = attr.value;
  });

  // Get all child elements recursively
  const children: SVGElementData[] = Array.from(element.children).map((child) =>
    extractElementAttributes(child)
  );

  return {
    type: element.tagName.toLowerCase(),
    props: convertPropsToReact(props),
    children,
  };
};

const extractSVGAttributes = (svgString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svg = doc.querySelector('svg');

  if (!svg) return null;

  const props: Record<string, string> = {};
  Array.from(svg.attributes).forEach((attr) => {
    props[attr.name] = attr.value;
  });

  const elements = Array.from(svg.children).map((child) =>
    extractElementAttributes(child)
  );

  return {
    type: 'svg',
    props: convertPropsToReact(props),
    elements,
  };
};

const SVGElement: React.FC<{
  data: SVGElementData;
  key?: string | number;
}> = ({ data }) => {
  const { type, props, children } = data;
  const Element = type as keyof React.JSX.IntrinsicElements;

  return (
    <Element {...props}>
      {children.map((child, index) => (
        <SVGElement key={index} data={child} />
      ))}
    </Element>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, theme, ...props }) => {
  const iconData = iconsData.find((icon) => icon.title === name);

  if (!iconData) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const svgg = iconData.icon[theme] ?? iconData.icon.light;

  const svgData = extractSVGAttributes(svgg);
  if (!svgData) return null;

  return (
    <svg {...svgData.props} {...props}>
      {svgData.elements.map((element, index) => (
        <SVGElement key={index} data={element} />
      ))}
    </svg>
  );
};

// Type-safe version
export const IconNames = iconsData.map((icon) => icon.title);
export type IconName = (typeof IconNames)[number];

export interface TypeSafeIconProps extends Omit<IconProps, 'name'> {
  name: IconName;
}

export const TypeSafeIcon: React.FC<TypeSafeIconProps> = (props) => {
  return <Icon {...props} />;
};

// interface SVGElementData {
//   type: string;
//   props: Record<string, string>;
//   children: SVGElementData[];
// }

// // Native SVG attributes that need special handling
// const NATIVE_ATTR = [
//   'clip-path',
//   'color-interpolation-filters',
//   'fill-opacity',
//   'fill-rule',
//   'clip-rule',
//   'stop-color',
//   'stop-opacity',
//   'stroke-width',
//   'stroke-linejoin',
//   'stroke-miterlimit',
//   'stroke-linecap',
//   'xmlns:xlink',
//   'xlink:href',
//   'xml:space',
// ] as const;

// const isCol = (p: string): boolean => p.includes(':');

// const camelize = (str: string, pascal = false, separator = '-'): string => {
//   const camelized = str
//     .split(separator)
//     .map((word, index) =>
//       index === 0 && !pascal
//         ? word.toLowerCase()
//         : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//     )
//     .join('');
//   return camelized;
// };

// const convertStyleToObject = (styleString: string): Record<string, string> => {
//   return styleString
//     .split(';')
//     .reduce((styleObj: Record<string, string>, styleProp) => {
//       if (!styleProp.trim()) return styleObj;
//       const [key, value] = styleProp.split(':').map((s) => s.trim());
//       if (key && value) {
//         const camelCaseKey = key.replace(/-([a-z])/g, (_, char) =>
//           char.toUpperCase()
//         );
//         styleObj[camelCaseKey] = value;
//       }
//       return styleObj;
//     }, {});
// };

// const convertPropsToReact = (
//   props: Record<string, string>
// ): Record<string, any> => {
//   const reactProps: Record<string, any> = {};

//   for (const [key, value] of Object.entries(props)) {
//     // Handle style attribute
//     if (key === 'style') {
//       reactProps.style = convertStyleToObject(value);
//       continue;
//     }

//     // Handle native SVG attributes
//     const nativeAttr = NATIVE_ATTR.find((attr) => attr === key);
//     if (nativeAttr) {
//       const reactKey = camelize(
//         nativeAttr,
//         false,
//         isCol(nativeAttr) ? ':' : '-'
//       );
//       reactProps[reactKey] = value;
//       continue;
//     }

//     // Handle regular attributes
//     reactProps[camelize(key)] = value;
//   }

//   return reactProps;
// };

// const extractElementAttributes = (element: Element): SVGElementData => {
//   // Get all attributes and convert them to React props
//   const rawProps: Record<string, string> = {};
//   Array.from(element.attributes).forEach((attr) => {
//     rawProps[attr.name] = attr.value;
//   });

//   const reactProps = convertPropsToReact(rawProps);

//   // Get all child elements recursively
//   const children: SVGElementData[] = Array.from(element.children).map((child) =>
//     extractElementAttributes(child)
//   );

//   return {
//     type: element.tagName.toLowerCase(),
//     props: reactProps,
//     children,
//   };
// };

// const extractSVGAttributes = (svgString: string) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(svgString, 'image/svg+xml');
//   const svg = doc.querySelector('svg');

//   if (!svg) return null;

//   // Get SVG root level attributes and convert them to React props
//   const rawProps: Record<string, string> = {};
//   Array.from(svg.attributes).forEach((attr) => {
//     rawProps[attr.name] = attr.value;
//   });

//   const reactProps = convertPropsToReact(rawProps);

//   // Extract all child elements and their attributes recursively
//   const elements = Array.from(svg.children).map((child) =>
//     extractElementAttributes(child)
//   );

//   return {
//     type: 'svg',
//     props: reactProps,
//     elements,
//   };
// };

// const SVGElement: React.FC<{
//   data: SVGElementData;
//   key?: string | number;
// }> = ({ data }) => {
//   const { type, props, children } = data;
//   const Element = type as keyof React.JSX.IntrinsicElements;

//   return (
//     <Element {...props}>
//       {children.map((child, index) => (
//         <SVGElement key={index} data={child} />
//       ))}
//     </Element>
//   );
// };

// export const Icon: React.FC<IconProps> = ({ name, theme, ...props }) => {
//   const iconData = iconsData.find((icon) => icon.title === name);

//   if (!iconData) {
//     console.warn(`Icon "${name}" not found`);
//     return null;
//   }

//   const svgg = iconData.icon[theme] ?? iconData.icon.light;

//   const svgData = extractSVGAttributes(svgg);

//   if (!svgData) return null;

//   return (
//     <svg {...svgData.props} {...props}>
//       {svgData.elements.map((element, index) => (
//         <SVGElement key={index} data={element} />
//       ))}
//     </svg>
//   );
// };

// // Type-safe version
// export const IconNames = iconsData.map((icon) => icon.title);
// export type IconName = (typeof IconNames)[number];

// export interface TypeSafeIconProps extends Omit<IconProps, 'name'> {
//   name: IconName;
// }

// export const TypeSafeIcon: React.FC<TypeSafeIconProps> = (props) => {
//   return <Icon {...props} />;
// };
// // Example SVG elements that can be parsed:
// /*
// SVG Elements supported:
// - <a>
// - <circle>
// - <clipPath>
// - <defs>
// - <desc>
// - <ellipse>
// - <feBlend>
// - <feColorMatrix>
// - <feComponentTransfer>
// - <feComposite>
// - <feConvolveMatrix>
// - <feDiffuseLighting>
// - <feDisplacementMap>
// - <feDistantLight>
// - <feDropShadow>
// - <feFlood>
// - <feFuncA>
// - <feFuncB>
// - <feFuncG>
// - <feFuncR>
// - <feGaussianBlur>
// - <feImage>
// - <feMerge>
// - <feMergeNode>
// - <feMorphology>
// - <feOffset>
// - <fePointLight>
// - <feSpecularLighting>
// - <feSpotLight>
// - <feTile>
// - <feTurbulence>
// - <filter>
// - <foreignObject>
// - <g>
// - <image>
// - <line>
// - <linearGradient>
// - <marker>
// - <mask>
// - <metadata>
// - <path>
// - <pattern>
// - <polygon>
// - <polyline>
// - <radialGradient>
// - <rect>
// - <stop>
// - <style>
// - <svg>
// - <switch>
// - <symbol>
// - <text>
// - <textPath>
// - <title>
// - <tspan>
// - <use>
// - <view>
// */

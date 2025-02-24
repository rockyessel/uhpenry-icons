import iconJson from '../icons.json';
import { IIconLibrary } from '../types';

export const ICON_LIBRARY = iconJson as unknown as IIconLibrary[];

export const SVG_SPECIAL_CASES: Record<string, string> = {
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

export const NATIVE_ATTR = [
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

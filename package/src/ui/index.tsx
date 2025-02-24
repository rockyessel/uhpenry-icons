import React from 'react';
import { IconProps, SVGElementData } from '../types';
import { extractSVGAttributes, getIcon } from '../helpers';

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

export const Icon: React.FC<IconProps> = ({ name, theme, size, ...props }) => {
  const iconData = getIcon(name);

  if (!iconData) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const svgg =
    theme === 'dark' && 'dark' in iconData.icon
      ? iconData.icon.dark
      : iconData.icon.light;

  const svgData = extractSVGAttributes(svgg);

  if (!svgData) return null;

  return (
    <svg
      {...props}
      {...svgData.props}
      width={size ?? props.width}
      height={size ?? props.height}
    >
      {svgData.elements.map((element, index) => (
        <SVGElement key={index} data={element} />
      ))}
    </svg>
  );
};

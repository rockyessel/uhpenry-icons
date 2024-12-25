import React, { SVGProps } from 'react';
import { iconLibrary } from '../lib';
export type IconNameType = keyof typeof iconLibrary;
export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}
export type UnsrcIconType = React.SVGProps<SVGSVGElement>;
export interface UnsrcIconProps extends Partial<SVGProps<SVGSVGElement>> {
    size?: number | string;
}

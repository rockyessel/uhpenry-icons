import React from 'react';
import { library } from '../utils';

export type IconNameType = keyof typeof library;

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  size?: number | string;
}

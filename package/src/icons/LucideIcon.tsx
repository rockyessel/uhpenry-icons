import * as React from 'react';
import { IconProps } from '../types';

export const LucideIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 240 240" 
        {...props} 
        ref={forwardedRef}><script /><path d='M140 120a40 40 0 0 0-80 0 80 80 0 1 0 160 0 119.7 119.7 0 0 0-40-89.44' stroke='#2D3748' strokeWidth='10' /><path d='M100 120a40 40 0 0 0 80 0 80 80 0 1 0-160 0 119.7 119.7 0 0 0 40.63 90' stroke='#F56565' strokeWidth='10' /></svg>
  )
);

LucideIcon.displayName = 'LucideIcon';
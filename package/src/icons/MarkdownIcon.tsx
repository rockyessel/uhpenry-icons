import * as React from 'react';
import { IconProps } from '../types';

export const MarkdownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 16 16" 
        {...props} 
        ref={forwardedRef}><path d='M6.345 5h2.1v6.533H6.993l.055-5.31-1.774 5.31H4.072l-1.805-5.31c.04.644.06 5.31.06 5.31H1V5h2.156s1.528 4.493 1.577 4.807zm6.71 3.617v-3.5H11.11v3.5H9.166l2.917 2.916L15 8.617z' /></svg>
  )
);

MarkdownIcon.displayName = 'MarkdownIcon';
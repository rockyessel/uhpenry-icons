import * as React from 'react';
import { IconProps } from '../types';

export const StencilIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 512 512" 
        {...props} 
        ref={forwardedRef}><path d='M188.8 334.07h197.33L279.47 448H83.2ZM512 199H106.61L0 313h405.39ZM232.2 64h196.6L322.62 177.93H125.87Z' /></svg>
  )
);

StencilIcon.displayName = 'StencilIcon';
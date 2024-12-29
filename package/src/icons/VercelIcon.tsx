import * as React from 'react';
import { IconProps } from '../types';

export const VercelIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 -17 256 256" 
        {...props} 
        ref={forwardedRef}><path d='m128 0 128 221.705H0z' /></svg>
  )
);

VercelIcon.displayName = 'VercelIcon';
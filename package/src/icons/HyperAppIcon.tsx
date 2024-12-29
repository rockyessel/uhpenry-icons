import * as React from 'react';
import { IconProps } from '../types';

export const HyperAppIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="-156 -156 312 312" 
        {...props} 
        ref={forwardedRef}><path d='M-26.682-9.388h40.014l9.61 19.706h-49.623v49.613h-19.704V10.318H-96V-9.388h49.615V-59h19.703zm123.42 69.32H73.524L15.518-59h23.215z' fill='#0080FF' /></svg>
  )
);

HyperAppIcon.displayName = 'HyperAppIcon';
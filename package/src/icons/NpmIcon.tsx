import * as React from 'react';
import { IconProps } from '../types';

export const NpmIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 240 240" 
        {...props} 
        ref={forwardedRef}><g fill='none' fillRule='evenodd'><path fill='#D40001' d='M0 0h240v240H0z' /><path fill='#FFF' d='M167.18 79.28h-45.13V202.5H40V30h160v172.49h-32.82z' /></g></svg>
  )
);

NpmIcon.displayName = 'NpmIcon';
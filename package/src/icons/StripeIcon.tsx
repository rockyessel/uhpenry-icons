import * as React from 'react';
import { IconProps } from '../types';

export const StripeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 240 240" 
        {...props} 
        ref={forwardedRef}><path fill="#6772E5" fillRule="evenodd" d="M10 10h220v220H10zm101.2 81.9c0 -6.04 4.94 -8.36 13.14 -8.36 11.74 0 26.58 3.56 38.33 9.9V57.1c-12.83 -5.09 -25.5 -7.1 -38.33 -7.1 -31.38 0 -52.25 16.39 -52.25 43.75 0 42.66 58.74 35.86 58.74 54.25 0 7.11 -6.19 9.43 -14.84 9.43 -12.83 0 -29.22 -5.25 -42.2 -12.36v36.79c14.37 6.18 28.9 8.8 42.2 8.8 32.15 0 54.26 -15.91 54.26 -43.58 -0.16 -46.07 -59.05 -37.88 -59.05 -55.19"/></svg>
  )
);

StripeIcon.displayName = 'StripeIcon';
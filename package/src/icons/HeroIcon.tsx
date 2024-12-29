import * as React from 'react';
import { IconProps } from '../types';

export const HeroIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 240 240" 
        {...props} 
        ref={forwardedRef}><path fillRule='evenodd' clipRule='evenodd' d='m112.9 0 8.63 8.21a120.5 120.5 0 0 0 83.37 33.35l1.54-.01 9.2-.12 2.87 8.78a148 148 0 0 1 7.29 45.95c0 68.52-46.65 126.06-109.78 142.38l-3.13.81-3.13-.81C46.66 222.22 0 164.68 0 96.16c0-16.03 2.56-31.48 7.29-45.95l2.87-8.78 9.2.12 1.54.01c32.3 0 61.63-12.67 83.37-33.35zM28.69 66.55a123 123 0 0 0-3.6 29.61 121.8 121.8 0 0 0 87.81 117.12 121.8 121.8 0 0 0 87.81-117.12c0-10.22-1.25-20.14-3.6-29.61a145.4 145.4 0 0 1-84.21-32.46 145.3 145.3 0 0 1-84.21 32.46' fill='#8B5CF6' /></svg>
  )
);

HeroIcon.displayName = 'HeroIcon';
import * as React from 'react';
import { IconProps } from '../types';

export const RemixIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 411 473" 
        {...props} 
        ref={forwardedRef}><path fillRule='evenodd' clipRule='evenodd' d='M392.946 364.768c4.255 54.65 4.255 80.268 4.255 108.232H270.756c0-6.091.109-11.663.219-17.313.342-17.564.699-35.88-2.147-72.868-3.761-54.152-27.08-66.185-69.957-66.185H0v-98.525h204.889c54.16 0 81.241-16.476 81.241-60.098 0-38.357-27.081-61.601-81.241-61.601H0V0h227.456C350.069 0 411 57.912 411 150.42c0 69.193-42.877 114.319-100.799 121.84 48.895 9.777 77.48 37.605 82.745 92.508' fill='#121212' /><path d='M0 473v-73.447h133.697c22.332 0 27.181 16.563 27.181 26.441V473z' fill='#121212' /></svg>
  )
);

RemixIcon.displayName = 'RemixIcon';
import * as React from 'react';
import { IconProps } from '../types';

export const DwollaIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 85 85" 
        {...props} 
        ref={forwardedRef}><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="2.482" y1="77.792" x2="73.968" y2="6.306"><stop offset="0" stopColor="#f3904a"/><stop offset=".999" stopColor="#aa437f"/></linearGradient><path d="M72.726 19.497 40.118.671a5.01 5.01 0 0 0-5.006 0L2.503 19.497A5 5 0 0 0 0 23.833v37.652c0 1.789.954 3.442 2.503 4.336l32.608 18.826a5.01 5.01 0 0 0 5.006 0l32.608-18.826a5 5 0 0 0 2.503-4.336V23.833a5 5 0 0 0-2.502-4.336M16.238 33.246v21.755L5.007 61.485V23.833L37.615 5.007v13.007L18.742 28.91a5.01 5.01 0 0 0-2.504 4.336m18.873 5.077a5 5 0 0 0-2.503 4.336v21.679l-11.363 6.56V33.246L53.853 14.42v13.083zm35.111 23.162L37.615 80.311V42.659l32.608-18.826z" fill="url(#a)"/></svg>
  )
);

DwollaIcon.displayName = 'DwollaIcon';
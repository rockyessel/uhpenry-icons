import * as React from 'react';
import { IconProps } from '../types';

export const LoopbackIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="-60 -90 375 375" 
        {...props} 
        ref={forwardedRef}><path fill='#3f5dff' d='m68.65 174.33 27.25-17.5 34.446 19.66 34.774-20.366 28.82 16.42-63.414 37.05zM57.176 42.37 129.64 0l72.976 41.62.244 73.24-28.774-16.42-.13-40.114-44.11-25.154-43.914 25.64.11 40.094-9.776 5.714L57.4 116.716z' /><path fill='#3f5dff' d='m96.274 69.046 20.746 11.806-20.656 12.05zm47.024 59.78 28.554-16.726 35.46 20.19 24.076-14.054-.154-27.87-18.16-10.37-.11-33.1 47.2 26.92.02 60.84-52.696 30.786z' /><path fill='#3f5dff' d='M.31 136 0 74.984 46.85 47.62l.11 33.19L28.8 91.4l.13 27.87 24.23 13.814 110.51-64.48.11 33.19L53.314 166.23z' /></svg>
  )
);

LoopbackIcon.displayName = 'LoopbackIcon';
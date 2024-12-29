import * as React from 'react';
import { IconProps } from '../types';

export const SpringBootIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 97.1 97" 
        {...props} 
        ref={forwardedRef}><path d='M88.4 5.6a42.3 42.3 0 0 1-5.2 9.1A48.46 48.46 0 1 0 15.5 84l1.8 1.6A48.41 48.41 0 0 0 96.8 52c1.4-12.2-2.3-27.8-8.4-46.4M22.5 84.4a4.12 4.12 0 1 1-.6-5.8 4.21 4.21 0 0 1 .6 5.8m65.6-14.5C76.2 85.8 50.6 80.4 34.3 81.2c0 0-2.9.2-5.8.6 0 0 1.1-.5 2.5-1 11.5-4 16.9-4.8 23.9-8.4C68 65.7 81.1 51 83.7 35.8c-5 14.6-20.2 27.2-34 32.3-9.5 3.5-26.6 6.9-26.6 6.9l-.7-.4c-11.6-5.7-12-30.9 9.2-39 9.3-3.6 18.1-1.6 28.2-4 10.7-2.5 23.1-10.5 28.1-21 5.6 16.9 12.4 43.1.2 59.3' fill='#6db33f' /></svg>
  )
);

SpringBootIcon.displayName = 'SpringBootIcon';
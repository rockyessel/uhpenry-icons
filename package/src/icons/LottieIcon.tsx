import * as React from 'react';
import { IconProps } from '../types';

export const LottieIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        {...props} 
        ref={forwardedRef}><path fillRule='evenodd' clipRule='evenodd' fill='#00ddb3' d='M16.195 0h31.61C56.75 0 64 7.25 64 16.195v31.61C64 56.75 56.75 64 47.805 64h-31.61C7.25 64 0 56.75 0 47.805v-31.61C0 7.25 7.25 0 16.195 0m14.084 28.492c3.281-6.315 7.355-14.156 18.37-14.156a3.16 3.16 0 0 1 3.163 3.163 3.16 3.16 0 0 1-3.163 3.164c-6.69 0-9.287 4.072-12.765 10.776l-2.145 4.04-.009.017c-3.279 6.317-7.353 14.169-18.376 14.169a3.164 3.164 0 1 1 0-6.328c6.691 0 9.287-4.072 12.768-10.776l2.142-4.04z' /></svg>
  )
);

LottieIcon.displayName = 'LottieIcon';
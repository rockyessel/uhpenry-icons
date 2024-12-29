import * as React from 'react';
import { IconProps } from '../types';

export const RadixUIIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0.384 0 1.632 2.4" 
        {...props} 
        ref={forwardedRef}><path d='M1.152 2.4a.768.768 0 1 1 0-1.536zm0-2.4H.384v.768h.768zm.48.768a.384.384 0 1 0 0-.768.384.384 0 0 0 0 .768' fill='currentcolor' /></svg>
  )
);

RadixUIIcon.displayName = 'RadixUIIcon';
import * as React from 'react';
import { IconProps } from '../types';

export const AngularJsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><path fill='#dd0031' d='M16 2 2.966 6.648l1.988 17.234L16 30l11.046-6.118 1.988-17.234z' /><path fill='#c3002f' d='M16 2v3.108-.014V30l11.046-6.118 1.988-17.234z' /><path d='m16 5.094-8.148 18.27h3.038l1.638-4.088h6.916l1.638 4.088h3.038zm2.38 11.662h-4.76L16 11.03Z' fill='#fff' /></svg>
  )
);

AngularJsIcon.displayName = 'AngularJsIcon';
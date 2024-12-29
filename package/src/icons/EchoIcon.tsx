import * as React from 'react';
import { IconProps } from '../types';

export const EchoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="-11.2 -9.6 64 57.6" 
        {...props} 
        ref={forwardedRef}><path fill='#828282' d='M.867 3.468 6.611.217l5.636 3.251-5.853 3.251zm6.936 4.01 5.744-3.36 5.744 3.36-5.853 3.143z' /><path fill='#c6c6c6' d='m22.435 7.37 5.744-3.36 5.636 3.36-5.853 3.251zm7.153-4.01L35.333 0l5.636 3.36-5.852 3.143z' /><path fill='#00afd1' d='M0 4.552v7.153l5.744 3.251V7.911zm7.153 4.01v7.154l5.853 3.143v-6.937zm7.045 3.793v7.153l5.744 3.144v-6.936z' /><path fill='#4ae1ff' d='M41.51 4.66v7.153l-5.853 3.251V8.02zm-7.261 4.011v7.153l-5.744 3.143v-6.936zm-7.045 3.793v7.153L21.46 22.76v-6.936z' /><path fill='#00afd1' d='M0 13.114v7.153l5.744 3.143v-6.936zm7.153 3.902v7.153l5.853 3.251v-6.936zm7.045 3.793v7.153l5.744 3.144v-6.937z' /><path fill='#4ae1ff' d='M41.51 13.222v7.153l-5.853 3.143v-6.936zm-7.261 4.01v7.153l-5.744 3.143v-6.935zm-7.045 3.685v7.153l-5.744 3.143v-6.935z' /><path fill='#00afd1' d='M0 21.568v7.153l5.744 3.251v-7.044zm7.153 4.01v7.153l5.853 3.143v-6.936zm7.045 3.793v7.153l5.744 3.144v-6.936z' /><path fill='#4ae1ff' d='M41.51 21.677v7.153l-5.853 3.251v-6.936zm-7.261 4.01v7.153l-5.744 3.143v-6.936zm-7.045 3.793v7.154l-5.744 3.143v-6.936z' /><path fill='#828282' d='m20.809 8.02-5.744 3.36 5.636 3.143z' /><path fill='#c6c6c6' d='m20.809 8.02-.108 6.503 5.744-3.143z' /></svg>
  )
);

EchoIcon.displayName = 'EchoIcon';
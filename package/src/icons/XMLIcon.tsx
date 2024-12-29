import * as React from 'react';
import { IconProps } from '../types';

export const XMLIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><path d='M24 21V9h-2v14h8v-2zM18 9l-1.52 5-.48 1.98-.46-1.98L14 9h-2v14h2v-8l-.16-2 .58 2L16 19.63 17.58 15l.58-2-.16 2v8h2V9zm-8 0H8l-2 6-2-6H2l2.75 7L2 23h2l2-6 2 6h2l-2.75-7z' /><path fill='none' d='M0 0h32v32H0z' /></svg>
  )
);

XMLIcon.displayName = 'XMLIcon';
import * as React from 'react';
import { IconProps } from '../types';

export const ScalaIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0.624 0.596 10.222 17.838" 
        {...props} 
        ref={forwardedRef}><path d='m1.278 1.716.446-.446a1.66 1.66 0 0 1 2.42.094l6.164 7.184a1.65 1.65 0 0 1-.014 2.17L4.152 17.68a1.65 1.65 0 0 1-2.406.072l-.452-.438a1.66 1.66 0 0 1-.1-2.228l3.678-4.41a1.66 1.66 0 0 0 .022-2.09l-3.736-4.67a1.64 1.64 0 0 1 .122-2.198' fill='#92d13d' /><path d='m4.87 10.676-3.678 4.41a1.66 1.66 0 0 0 .1 2.228l.446.446a1.65 1.65 0 0 0 2.406-.072l1.33-1.508a7.32 7.32 0 0 0-.38-7.264 1.66 1.66 0 0 1-.222 1.76' fill='#49691f' /></svg>
  )
);

ScalaIcon.displayName = 'ScalaIcon';
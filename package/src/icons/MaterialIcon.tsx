import * as React from 'react';
import { IconProps } from '../types';

export const MaterialIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 57.6 45.725" 
        {...props} 
        ref={forwardedRef}><path d='M0 24.941V0l21.6 12.47v8.314L7.2 12.47v16.627z' fill='#00b0ff' /><path d='M21.6 12.47 43.2 0v24.941l-14.4 8.314-7.2-4.157L36 20.784V12.47l-14.4 8.314z' fill='#0081cb' /><path d='M21.6 29.098v8.314L36 45.726v-8.314z' fill='#00b0ff' /><path d='m36 45.725 21.6-12.47V16.627l-7.2 4.157v8.314L36 37.412zm14.4-33.254V4.157L57.6 0v8.314z' fill='#0081cb' /></svg>
  )
);

MaterialIcon.displayName = 'MaterialIcon';
import * as React from 'react';
import { IconProps } from '../types';

export const GemIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="-18.5 0 293 293" 
        {...props} 
        ref={forwardedRef}><g fill="#D34231"><path d="m76.748 97.434-.163-.163-36.11 36.11 87.674 87.512 36.11-35.948 51.564-51.563-36.11-36.11v-.164H76.584z"/><path d="M127.823.976.135 74.173v146.395l127.688 73.197 127.689-73.197V74.173zm103.29 205.603-103.29 59.534-103.29-59.534V87.837l103.29-59.534 103.29 59.534z"/></g></svg>
  )
);

GemIcon.displayName = 'GemIcon';
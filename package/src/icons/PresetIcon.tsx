import * as React from 'react';
import { IconProps } from '../types';

export const PresetIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 16 16" 
        {...props} 
        ref={forwardedRef}><path d="M8 1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7m0 1a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6" style={{"opacity":"1","vectorEffect":"none","fill":"#373737","fillOpacity":"1","stroke":"none","strokeWidth":"4","strokeLinecap":"square","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"3.20000005","strokeOpacity":".55063291"}}/><path style={{"opacity":"1","vectorEffect":"none","fill":"#373737","fillOpacity":"1","stroke":"none","strokeWidth":"4","strokeLinecap":"square","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"3.20000005","strokeOpacity":".55063291"}} d="M5 1041.362h6v6H5z" transform="translate(0 -1036.362)"/></svg>
  )
);

PresetIcon.displayName = 'PresetIcon';
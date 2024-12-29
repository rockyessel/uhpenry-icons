import * as React from 'react';
import { IconProps } from '../types';

export const StimulusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 256 256" 
        {...props} 
        ref={forwardedRef}><path d='M220.014 143.19v.146H256v45.104h-52.712c-4.144 0-10.459-1.73-13.994-3.84l-12.654-7.436c-3.535-2.109-9.411-2.109-12.946 0l-16.42 9.618c-3.536 2.024-3.536 5.486 0 7.583l34.486 20.224c3.535 2.109 9.874 3.828 14.007 3.828H256v30.061c0 4.145-3.389 7.522-7.534 7.522H7.534A7.546 7.546 0 0 1 0 248.478v-30.061h60.245a32.4 32.4 0 0 0 13.995-3.828l115.054-67.572c3.535-2.097 9.862-3.828 13.994-3.828zm0-73.765H256v45.531h-60.245a32.3 32.3 0 0 0-13.995 3.865L66.706 187.05a32.3 32.3 0 0 1-13.994 3.864H0v-45.531h60.245a32.3 32.3 0 0 0 13.995-3.865l115.054-68.23a32.3 32.3 0 0 1 13.994-3.864zM248.466 0C252.611 0 256 3.389 256 7.375v30.11h-60.245a32.4 32.4 0 0 0-13.995 3.829L66.706 108.983c-3.535 2.109-9.862 3.84-13.994 3.84H0V67.657h52.712c4.144 0 10.459 1.731 13.994 3.84l12.654 7.449c3.535 2.108 9.411 2.108 12.946 0l16.42-9.631c3.536-2.036 3.536-5.486 0-7.607L74.24 41.472a32.5 32.5 0 0 0-14.007-3.84H0V7.522A7.56 7.56 0 0 1 7.534 0z' /></svg>
  )
);

StimulusIcon.displayName = 'StimulusIcon';
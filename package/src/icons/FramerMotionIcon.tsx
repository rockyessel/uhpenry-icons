import * as React from 'react';
import { IconProps } from '../types';

export const FramerMotionIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="3.7 3.7 43.6 43.6" 
        {...props} 
        ref={forwardedRef}><path d='M47.3 3.7v21.8L36.4 36.4 25.5 47.3 14.6 36.4l10.9-10.9v.1-.1z' fill='#59529d' /><path d='M47.3 25.5v21.8L36.4 36.4z' fill='#5271b4' /><path d='M25.5 25.5 14.6 36.4 3.7 47.3V3.7l10.9 10.9z' fill='#bb4b96' /></svg>
  )
);

FramerMotionIcon.displayName = 'FramerMotionIcon';
import * as React from 'react';
import { IconProps } from '../types';

export const ShadcnUIIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 240 240" 
        {...props} 
        ref={forwardedRef}><path fill='none' d='M0 0h240v240H0z' /><path d='m195 120-75 75m60-157.5L37.5 180' fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32px' /></svg>
  )
);

ShadcnUIIcon.displayName = 'ShadcnUIIcon';
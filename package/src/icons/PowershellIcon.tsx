import * as React from 'react';
import { IconProps } from '../types';

export const PowershellIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><defs><linearGradient id='a' x1='23.325' y1='-118.543' x2='7.26' y2='-104.193' gradientTransform='matrix(1 0 0 -1 0 -96)' gradientUnits='userSpaceOnUse' ><stop offset='0' stopColor='#5391fe' /><stop offset='1' stopColor='#3e6dbf' /></linearGradient><linearGradient id='b' x1='7.1' y1='-104.002' x2='23.001' y2='-118.292' xlinkHref='#a' /></defs><path d='M3.174 26.589a1.15 1.15 0 0 1-.928-.423 1.23 1.23 0 0 1-.21-1.052L6.233 6.78a1.8 1.8 0 0 1 1.681-1.37h20.912a1.16 1.16 0 0 1 .928.423 1.24 1.24 0 0 1 .21 1.052l-4.2 18.335a1.8 1.8 0 0 1-1.681 1.37H3.174Z' fillRule='evenodd' fill='url(#a)' /><path d='M7.914 5.646h20.912a.913.913 0 0 1 .908 1.187l-4.2 18.334a1.575 1.575 0 0 1-1.451 1.187H3.174a.913.913 0 0 1-.908-1.187l4.2-18.334a1.57 1.57 0 0 1 1.448-1.187' fillRule='evenodd' fill='url(#b)' /><path d='M16.04 21.544h5.086a1.118 1.118 0 0 1 0 2.234H16.04a1.118 1.118 0 0 1 0-2.234m3.299-4.966a1.76 1.76 0 0 1-.591.6l-9.439 6.775a1.224 1.224 0 0 1-1.438-1.977l8.512-6.164v-.126L11.035 10a1.224 1.224 0 0 1 1.782-1.672l6.418 6.827a1.166 1.166 0 0 1 .104 1.423' fill='#2c5591' fillRule='evenodd' /><path d='M19.1 16.342a1.75 1.75 0 0 1-.59.6l-9.436 6.776a1.225 1.225 0 0 1-1.439-1.977l8.513-6.164v-.127L10.8 9.761a1.224 1.224 0 0 1 1.783-1.672L19 14.916a1.16 1.16 0 0 1 .1 1.426m-3.2 5.07h5.086a1.059 1.059 0 1 1 0 2.118H15.9a1.059 1.059 0 1 1 0-2.118' fill='#fff' fillRule='evenodd' /></svg>
  )
);

PowershellIcon.displayName = 'PowershellIcon';
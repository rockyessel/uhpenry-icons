import * as React from 'react';
import { IconProps } from '../types';

export const AntDesignIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0.001 0 255.498 255.341" 
        {...props} 
        ref={forwardedRef}><defs><linearGradient x1='62.102%' y1='0%' x2='108.197%' y2='37.864%' id='a'><stop stopColor='#4285EB' offset='0%' /><stop stopColor='#2EC7FF' offset='100%' /></linearGradient><linearGradient x1='69.644%' y1='0%' x2='54.043%' y2='108.457%' id='b'><stop stopColor='#29CDFF' offset='0%' /><stop stopColor='#148EFF' offset='37.86%' /><stop stopColor='#0A60FF' offset='100%' /></linearGradient><linearGradient x1='69.691%' y1='-12.974%' x2='16.723%' y2='117.391%' id='c' ><stop stopColor='#FA816E' offset='0%' /><stop stopColor='#F74A5C' offset='41.473%' /><stop stopColor='#F51D2C' offset='100%' /></linearGradient><linearGradient x1='68.128%' y1='-35.691%' x2='30.44%' y2='114.943%' id='d' ><stop stopColor='#FA8E7D' offset='0%' /><stop stopColor='#F74A5C' offset='51.264%' /><stop stopColor='#F51D2C' offset='100%' /></linearGradient></defs><g fill='none'><path d='M116.85 4.545 4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568s-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c1.503-1.501 3.784-1.501 5.287 0l35.702 35.673c5.408 5.404 14.176 5.404 19.584 0s5.408-14.164 0-19.568l-47.09-47.05c-6.063-5.904-15.82-5.856-21.835.154' fill='url(#a)' /><path d='M116.85 4.545 4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568s-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c3.742-3.226 9.849-9.76 18.815-11.29q9.996-1.703 21.857 7.5L138.686 4.39c-6.064-5.903-15.82-5.855-21.836.155' fill='url(#b)' /><path d='M196.647 173.754c5.408 5.404 14.176 5.404 19.584 0l34.739-34.71a15.396 15.396 0 0 0 0-21.812l-35.041-34.89c-5.421-5.397-14.192-5.389-19.603.018-5.408 5.404-5.408 14.164 0 19.568l23.667 23.648c1.503 1.502 1.503 3.781 0 5.283l-23.346 23.327c-5.408 5.404-5.408 14.165 0 19.568' fill='url(#c)' /><ellipse fill='url(#d)' cx='128.327' cy='128.242' rx='30.327' ry='30.302' /></g></svg>
  )
);

AntDesignIcon.displayName = 'AntDesignIcon';
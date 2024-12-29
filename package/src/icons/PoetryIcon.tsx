import * as React from 'react';
import { IconProps } from '../types';

export const PoetryIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 448.17 560" 
        {...props} 
        ref={forwardedRef}><script/><defs><radialGradient id="a" cx="438.3" cy="639.01" r="569.94" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6877ec"/><stop offset=".6" stopColor="#5362cf"/><stop offset="1" stopColor="#4352b9"/></radialGradient><radialGradient id="b" cx="65.64" cy="-16.21" r="746.46" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00d5ff"/><stop offset=".38" stopColor="#00b8eb"/><stop offset="1" stopColor="#0080c5"/></radialGradient><radialGradient id="f" cx="259.68" cy="-34.71" r="431.37" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"/><stop offset="1"/></radialGradient><linearGradient id="c" x1="74.77" y1="67.3" x2="277.23" y2="512.72" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#294ca7"/><stop offset=".48" stopColor="#96a7d4"/><stop offset=".84" stopColor="#e1e6f3"/><stop offset="1" stopColor="#fff"/></linearGradient><linearGradient id="d" x1="-228.74" y1="-144.29" x2="451" y2="651.89" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6877ec"/><stop offset=".29" stopColor="#97a1f2"/><stop offset=".77" stopColor="#e2e4fb"/><stop offset="1" stopColor="#fff"/></linearGradient><linearGradient id="e" x1="-151.22" y1="-285.9" x2="450.08" y2="430.63" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8397cc"/><stop offset=".15" stopColor="#97a8d4"/><stop offset=".73" stopColor="#e2e6f3"/><stop offset="1" stopColor="#fff"/></linearGradient></defs><g data-name="Layer 1" style={{"isolation":"isolate"}}><path d="M168.08 560a570.54 570.54 0 0 0 291.76-156.41L56.25 0v448.17Z" transform="translate(-56.25)" style={{"fill":"url(#a)"}}/><path d="M56.25 448.17c247.52 0 448.17-200.65 448.17-448.17H56.25Z" transform="translate(-56.25)" style={{"fill":"url(#b)"}}/><path d="m56.25 448.17 17.25 17.25c121.57-4.45 231.4-55.68 312-136.23l-12.29-12.28A446.8 446.8 0 0 1 56.25 448.17" transform="translate(-56.25)" style={{"mixBlendMode":"multiply","fill":"url(#c)"}}/><path d="M168.08 560a570.54 570.54 0 0 0 291.76-156.41L56.25 0v448.17Z" transform="translate(-56.25)" style={{"mixBlendMode":"multiply","fill":"url(#d)"}}/><path d="M459.84 403.59 56.25 0l366.89 437.13c12.69-10.67 24.98-21.82 36.7-33.54" transform="translate(-56.25)" style={{"mixBlendMode":"multiply","fill":"url(#e)"}}/><path d="m56.25 0 316.91 316.91q4.23-4.25 8.35-8.6Z" transform="translate(-56.25)" style={{"mixBlendMode":"screen","fill":"url(#f)"}}/></g></svg>
  )
);

PoetryIcon.displayName = 'PoetryIcon';
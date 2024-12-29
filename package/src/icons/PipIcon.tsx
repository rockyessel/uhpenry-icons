import * as React from 'react';
import { IconProps } from '../types';

export const PipIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><defs><linearGradient id="a" x1="17.649" y1="8.845" x2="28.104" y2="19.301" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#387eb8"/><stop offset="1" stopColor="#366994"/></linearGradient><linearGradient id="b" x1="10.011" y1="22.109" x2="20.363" y2="11.758" gradientTransform="matrix(1 0 0 -1 0 32.257)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffe052"/><stop offset="1" stopColor="#ffc331"/></linearGradient><linearGradient id="c" x1="-.155" y1="8.846" x2="10.301" y2="19.301" xlinkHref="#a"/></defs><path d="m24.989 7.936-.028-.009c-5.58 0-5.15 2.794-5.15 2.794v10.605s-.006 2.749 2.562 2.749h.018c2.513 0 2.51-2.747 2.51-2.747V16.52h2.972C30 16.52 30 15.159 30 15.159v-4.913s.333-2.31-5.011-2.31m3.7 2.541a.914.914 0 1 1-.89-.936l-.024.007a.914.914 0 0 1 .914.914z" style={{"fill":"url(#a)"}}/><path d="M16.01 24.073h-.017c-2.561 0-2.561-3.585-2.561-3.585v-8.78s-.007-3.531 2.561-3.524h.018c2.51 0 2.51 3.524 2.51 3.524v8.78s0 3.584-2.511 3.585m.947-2.3a.914.914 0 1 0-.89.937l-.024-.007a.914.914 0 0 0 .914-.914Z" style={{"fill":"url(#b)"}}/><path d="m7.186 7.936-.028-.012c-5.58 0-5.15 2.794-5.15 2.794v10.608s-.008 2.75 2.56 2.75h.018c2.513 0 2.51-2.747 2.51-2.747V16.52h2.971c2.129 0 2.124-1.361 2.124-1.361v-4.913s.335-2.31-5.005-2.31m3.7 2.541A.914.914 0 1 1 10 9.54l-.024.007a.914.914 0 0 1 .914.914v.015Z" style={{"fill":"url(#c)"}}/></svg>
  )
);

PipIcon.displayName = 'PipIcon';
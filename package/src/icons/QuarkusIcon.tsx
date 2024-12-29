import * as React from 'react';
import { IconProps } from '../types';

export const QuarkusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 128 128" 
        {...props} 
        ref={forwardedRef}><path fill='#4695eb' d='M81.98 26.121 64 36.504l17.98 10.379Zm0 0' /><path fill='#ff004a' d='M46.02 26.121v20.766L64 36.504Zm0 0' /><path fill='#091313' d='M81.98 46.887 64 36.504 46.02 46.883 64 57.27Zm0 0' /><path fill='#4695eb' d='m27.059 58.965 17.98 10.379V48.582Zm0 0' /><path fill='#ff004a' d='m45.04 90.11 17.983-10.383L45.04 69.344Zm0 0' /><path fill='#091313' d='M45.04 48.582v20.762l17.983 10.383V58.965Zm0 0' /><path fill='#4695eb' d='M82.96 90.11V69.343L64.978 79.727Zm0 0' /><path fill='#ff004a' d='m100.941 58.965-17.98-10.383v20.762Zm0 0' /><path fill='#091313' d='M64.977 79.727 82.96 69.344V48.582L64.977 58.965Zm0 0' /><path fill='#4695eb' d='M103.023 5.602H24.977c-10.66 0-19.375 8.714-19.375 19.375v78.046c0 10.66 8.714 19.375 19.375 19.375h53.449L64 87.355l-10.469 22.13H24.977c-3.5 0-6.461-2.962-6.461-6.462V24.977c0-3.5 2.96-6.461 6.46-6.461h78.051c3.5 0 6.461 2.96 6.461 6.46v78.047c0 3.5-2.96 6.461-6.46 6.461H86.09l5.316 12.914h11.617c10.66 0 19.375-8.714 19.375-19.375V24.977c0-10.66-8.714-19.375-19.375-19.375m0 0' /></svg>
  )
);

QuarkusIcon.displayName = 'QuarkusIcon';
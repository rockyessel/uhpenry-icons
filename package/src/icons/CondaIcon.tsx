import * as React from 'react';
import { IconProps } from '../types';

export const CondaIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><path d="M16.559 8.137a7.2 7.2 0 0 0-1.234-1.708 7.6 7.6 0 0 0-.19 2.183 5.2 5.2 0 0 1 1.424-.475Zm-2.942 1.329a8 8 0 0 0-1.993-1.2 8.1 8.1 0 0 0 .885 2.183c0 .063.443-.475 1.108-.981Zm3.828-2.278a9.1 9.1 0 0 1 1.3-2.246A7.6 7.6 0 0 0 17 2.854a8.4 8.4 0 0 0-1.3 2.278 8.5 8.5 0 0 1 1.74 2.056Zm-5.853 4.556a10.3 10.3 0 0 0-2.692-.158 7.5 7.5 0 0 0 1.93 1.9 7 7 0 0 1 .759-1.74Zm-4.714 3.417a7.4 7.4 0 0 1 2.942-1.139 10 10 0 0 1-2.056-2.278 7.6 7.6 0 0 0-2.847 1.2 7.1 7.1 0 0 0 1.961 2.215Zm3.638-.285a6.16 6.16 0 0 0-2.815.886 10 10 0 0 0 2.815 1.2 7.7 7.7 0 0 1 0-2.088Zm3.765-9.333A7.8 7.8 0 0 0 11.592 4.4 8.4 8.4 0 0 0 11.4 7a8.9 8.9 0 0 1 2.47 1.264 10.3 10.3 0 0 1 .411-2.721Zm9.744-2.309a20.5 20.5 0 0 1 .917 4.112 6.8 6.8 0 0 0-3.068 1.519 7.4 7.4 0 0 1 1.55 1.044 1.35 1.35 0 0 0 1.645.316 37 37 0 0 0 2.721-2.72 1.273 1.273 0 0 0-.159-1.835 20.5 20.5 0 0 0-3.606-2.436ZM4.379 12.06a8.7 8.7 0 0 1 2.847-1.26 7.8 7.8 0 0 1-.759-2.974 14.7 14.7 0 0 0-2.088 4.234Zm6.96-1.392a10 10 0 0 1-.949-2.784 7.9 7.9 0 0 0-2.911-.126 7.3 7.3 0 0 0 .791 2.879 9.7 9.7 0 0 1 3.069.031Zm-5.22 5.062a8.9 8.9 0 0 1-2.025-2.373 14.2 14.2 0 0 0-.063 4.9 8.5 8.5 0 0 1 2.088-2.527Z" style={{"fill":"#43b02a","stroke":"#43b02a","strokeWidth":".06848896817112106px","fillRule":"evenodd"}}/><path d="M22.538 3.487A7.6 7.6 0 0 0 20.323 5.1a11.8 11.8 0 0 1 .823 2.5 9.8 9.8 0 0 1 2.309-1.329 6.6 6.6 0 0 0-.917-2.784ZM19.374 6.3a8.6 8.6 0 0 0-.822 1.676 10 10 0 0 1 1.329.19 7.6 7.6 0 0 0-.507-1.866Zm.285-2.4a9.6 9.6 0 0 1 2.056-1.487A15.4 15.4 0 0 0 18.046 2a9.7 9.7 0 0 1 1.613 1.9Z" style={{"fill":"#43b02a","stroke":"#43b02a","strokeWidth":".06848896817112106px","fillRule":"evenodd"}}/><path d="M27.378 23.892c-1.993-1.9-2.4-3.132-4.081-1.835a7.837 7.837 0 0 1-12.591-4.144A10.2 10.2 0 0 1 6.878 16.3a9.4 9.4 0 0 0-2.562 3.321h-.032C7.163 30.5 21.178 33.035 27.663 26.233c1.076-1.139.095-1.933-.285-2.341M6.309 20.855a7.6 7.6 0 0 1 .917-2.025 6.9 6.9 0 0 0 2.151.538c1.013 2.689 4.556 6.264 8.922 6.264a9.63 9.63 0 0 0 6.3-2.309 13 13 0 0 1 1.772 1.771c.095.127.095.159.095.159-5.766 5.03-15.538 4.302-20.157-4.398" style={{"fill":"#43b02a"}}/><path d="M10.67 4.11a20 20 0 0 0-.214 2.509 10.5 10.5 0 0 0-2.689-.093A18 18 0 0 1 10.67 4.11Zm1.59-.836a9.1 9.1 0 0 1 2.445 1.053 14 14 0 0 1 1.253-2.137 12.1 12.1 0 0 0-3.698 1.084Z" style={{"fill":"#43b02a","stroke":"#43b02a","strokeWidth":".0666054172038338px","fillRule":"evenodd"}}/></svg>
  )
);

CondaIcon.displayName = 'CondaIcon';
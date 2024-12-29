import * as React from 'react';
import { IconProps } from '../types';

export const GridsomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 512 512" 
        {...props} 
        ref={forwardedRef}><rect width={512} height={512} rx={256} /><path d='M405.171 228.04c17.666-.85 33.304 12.855 34.829 30.537 6.608 85.537-71.674 181.358-181.99 184.422-92.964 2.295-184.908-72.133-184.908-184.668 0-17.735 14.655-32.112 32.341-32.112s32.023 14.377 32.023 32.112c0 74.024 59.52 121.93 118.968 120.463 73.184-2.033 120.76-65.401 118.285-117.14-.848-17.715 12.786-32.764 30.452-33.614' fill='url(#a)' /><path d='M325.172 260.822c0-18.158 14.81-32.877 33.08-32.877h48.21c18.269 0 33.538 14.719 33.538 32.877 0 18.157-15.269 32.877-33.538 32.877h-48.21c-18.27 0-33.08-14.72-33.08-32.877m-101.154.048c0-18.184 14.717-32.925 32.85-32.925s32.851 14.741 32.851 32.925-14.717 32.925-32.851 32.925c-18.133 0-32.85-14.741-32.85-32.925' fill='#00A672' /><path fillRule='evenodd' clipRule='evenodd' d='M288.808 107.038c.734 17.72-12.996 32.681-30.667 33.417-76.283 3.177-122.853 63.132-120.586 120.06.706 17.721-12.761 32.661-30.433 33.368s-33.213-13.594-33.919-31.315c-3.694-92.77 73.552-184.482 182.28-186.283 17.671-.736 32.591 13.033 33.325 30.753' fill='#00A672' /><defs><linearGradient x1={256.745} y1={226.219} x2={256.745} y2={443.051} gradientUnits='userSpaceOnUse' ><stop stopColor='#00583E' /><stop offset={1} stopColor='#00835C' /></linearGradient></defs></svg>
  )
);

GridsomeIcon.displayName = 'GridsomeIcon';
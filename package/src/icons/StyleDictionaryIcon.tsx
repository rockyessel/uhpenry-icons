import * as React from 'react';
import { IconProps } from '../types';

export const StyleDictionaryIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 800 800" 
        {...props} 
        ref={forwardedRef}><path d='M480 0v160h24c4.464.275 8.77.58 13.188 1.125l3.345.398c22.4 2.85 44.115 8.19 65.467 15.477l2.73.928c38.932 13.482 74.557 35.25 104.946 62.967a268 268 0 0 0 6.199 5.417c8.357 7.31 16.024 15.2 22.895 23.922a179 179 0 0 0 5.578 6.551C768.507 322.468 792.132 384.025 799 444l.286 2.416c2.774 27.5 2.435 57.347-2.286 84.584l-.602 3.495C793.26 552.076 788.766 569.104 783 586l-.928 2.73c-13.482 38.932-35.25 74.557-62.967 104.946a268 268 0 0 0-5.418 6.199c-7.31 8.357-15.2 16.024-23.921 22.895a179 179 0 0 0-6.551 5.578C637.548 768.493 575.965 792.16 516 799l-2.501.286c-9.106.896-18.22.935-27.36.954-2.738.01-5.475.041-8.213.072-15.097.092-29.59-1.49-44.051-6.062l-2.51-.778C412.676 787.509 395.226 778.392 380 766l-1.71-1.387C349.992 741.514 332.06 711.172 323 676l-.548-2.063C317.1 652.747 317.4 625.093 323 604l.618-2.4c5.933-22.514 15.633-43.477 30.382-61.6l1.387-1.71C380.853 507.093 414.82 488.835 454 481L0 480c0-105.74 32.976-206.459 110-307l1.56-1.86A787 787 0 0 1 122 159l2.422-2.766c5.842-6.511 11.964-12.747 18.124-18.956q2.114-2.134 4.223-4.274c5.334-5.341 10.82-10.29 16.735-14.982 2.55-2.065 4.964-4.232 7.371-6.46 19.2-17.423 41.659-32.272 64.019-45.329q2.192-1.284 4.377-2.584C312.449 20.15 395.363 0 480 0' fill='#3FC6C0' /><path d='M480 0v160l-33 2c-8.745 1.144-17.352 2.36-26 4l-3.253.608C369.326 175.903 323.845 196.692 285 227l-2.46 1.91c-2.54 2-5.044 4.037-7.54 6.09l-1.505 1.227C259.085 248.033 245.231 261.092 234 276l-1.23 1.62A946 946 0 0 0 225 288c.715.264 1.43.529 2.168.8 17.808 7.542 31.4 23.525 38.65 41.195 8.082 21.539 7.044 44.177-2.341 65.165-9.909 19.056-25.562 33.797-46.102 40.652-2.45.77-4.906 1.483-7.375 2.188l-2.473.75c-12.094 3.072-26.176 2.254-38.093-1.094-2.497-.786-2.497-.786-5.434-.656-2.823 14.116-3.13 28.631-4 43H0c0-105.74 32.976-206.459 110-307l1.56-1.86A787 787 0 0 1 122 159l2.422-2.766c5.842-6.511 11.964-12.747 18.124-18.956q2.114-2.134 4.223-4.274c5.334-5.341 10.82-10.29 16.735-14.982 2.55-2.065 4.964-4.232 7.371-6.46 19.2-17.423 41.659-32.272 64.019-45.329q2.192-1.284 4.377-2.584C312.449 20.15 395.363 0 480 0m13 480h307c0 28.074 0 28.074-1.125 37.188l-.398 3.345c-2.85 22.4-8.19 44.115-15.477 65.467l-.928 2.73c-13.482 38.932-35.25 74.557-62.967 104.946a268 268 0 0 0-5.418 6.199c-7.31 8.357-15.2 16.024-23.921 22.895a179 179 0 0 0-6.551 5.578C642.465 764.17 589.049 786.558 536 796l-2.95.53c-9.704 1.703-19.165 3.012-29.05 2.47 3.194-2.13 4.957-2.473 8.688-3.125 41.205-8.556 76.957-32.456 100.433-67.387 24.496-37.632 31.423-81.533 22.293-125.297-6.02-25.898-18.622-49.534-36.414-69.191l-2.234-2.633C571.208 501.612 531.624 484.125 493 481z' fill='#7FD9D5' /><path d='M505.004 568.305c8.306 7.054 14.33 16.364 15.332 27.394.138 14.106-3.008 23.678-12.992 34.016-4.785 4.435-9.176 6.2-15.344 9.285l148 1c0 20.032 0 20.032-1.437 27.438l-.521 2.737C631.488 701.951 616.427 728.158 595 752l-1.824 2.047C583.719 764.05 571.756 771.962 560 779l-3.371 2.055C541.884 789.67 521.275 798 504 798v2h-24v-80h-11c-15.268-2.26-29.377-8.881-41-19l-1.777-1.348c-13.598-10.575-23.202-29.518-25.942-46.368-2.726-22.142 1.688-43.528 15.406-61.409q1.643-1.95 3.313-3.875l2.313-3.062c19.747-21.585 57.853-35.502 83.69-16.633' fill='#18B9B2' /><path d='M243.25 298.719C257.926 310.872 268.643 330.023 271 349c1.654 24.632-4.459 46.03-20.375 65.25C239.48 426.4 225.619 433.542 210 438l-2.473.75c-19.135 4.86-39.474.382-56.527-8.75-3.876-2.44-7.455-5.105-11-8l-1.945-1.488C124.87 410.018 117.519 394.835 113 379l-.75-2.473c-5.062-19.932-.181-40.352 9.72-57.815 2.33-3.873 5.074-7.307 8.03-10.712l2.313-3.062c29.712-32.477 77.432-31.814 110.937-6.22' fill='#FDFEFE' /><path d='M480 480v80l-17 2c-13.491 3.855-24.21 9.104-35 18l-3 2.188c-16.792 14.38-23.089 36.789-25 57.812h-80c0-36.795 10.579-71.22 34-100l1.387-1.71C386.563 500.097 430.993 480 480 480' fill='#7FD9D5' /><path d='M216.004 328.305c9.722 8.257 13.778 17.397 15.254 29.875.572 10.42-3.608 20.93-10.258 28.82-6.988 7.74-16.676 12.17-27.035 13.203-11.77.272-22.365-3.357-31.188-11.172-7.281-7.513-11.783-17.56-12.027-28.094.183-11.014 3.815-21.12 11.36-29.195 15.197-14.201 36.787-15.93 53.894-3.437' fill='#303942' /><path d='M480 560v40h-40c4.78 19.524 4.78 19.524 18 33 4.445 2.665 9.034 4.51 14 6v1h-72c0-19.826 5.935-36.952 19-52l2.313-3.062C436.657 568.166 457.65 560 480 560' fill='#3FC6C0' /><path d='M440 600h40v40c-11.958 0-21.195-4.29-29.68-12.656-7.172-7.85-10.32-16.77-10.32-27.344m40-40c13.453 1.345 22.998 4.605 32 15 5.546 8.296 8 14.946 8 25h-40z' fill='#1FBCB5' /></svg>
  )
);

StyleDictionaryIcon.displayName = 'StyleDictionaryIcon';
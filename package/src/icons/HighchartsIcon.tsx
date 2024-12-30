import * as React from 'react';
import { IconProps } from '../types';

export const HighchartsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="10 10 70 65" 
        {...props} 
        ref={forwardedRef}><g strokeWidth="0" strokeLinejoin="round"><path fill="#8087E8" d="M51.539 10 40.315 36.21 25.567 70.651l34.292-14.486 18.164-7.672z"/><path fill="#30426B" d="m57.258 41.73 2.602 14.435 18.164-7.672z"/><path fill="#6699A1" d="m51.539 10 5.719 31.731 20.765 6.762z"/><path fill="#78758C" d="m57.258 41.73 20.766 6.763-37.708-12.284-14.749 34.442L59.86 56.165z"/><path fill="#A3EDBA" d="M25.567 70.651 40.315 36.21 10 26.335z"/><path fill="#6699A1" d="m59.86 56.165 3.326 18.445 14.838-26.117z"/><path fill="#8087E8" d="M51.539 10 40.315 36.21l16.943 5.521z"/></g><g stroke="#f0f0f0"><path fill="#f0f0f0" d="M128.743 45.349h-17.02v9.77a1.83 1.83 0 0 1-1.849 1.851 1.83 1.83 0 0 1-1.85-1.851V33.362c0-1.037.813-1.852 1.85-1.852 1.036 0 1.849.813 1.849 1.852v8.436h17.02v-8.436c0-1.037.814-1.852 1.85-1.852s1.85.813 1.85 1.852v21.754a1.83 1.83 0 0 1-1.85 1.851 1.83 1.83 0 0 1-1.85-1.851zm18.498 9.767c0 1.037-.814 1.851-1.852 1.851s-1.852-.813-1.852-1.851V33.362c0-1.037.814-1.852 1.852-1.852s1.852.813 1.852 1.852zm27.152-9.101c0-1.036.814-1.774 1.852-1.774 1.034 0 1.852.813 1.852 1.849v5.847c0 .444-.226 1.109-.595 1.479-2.367 2.369-5.549 3.773-9.176 3.773a12.915 12.915 0 0 1-12.949-12.948 12.913 12.913 0 0 1 12.949-12.949c3.627 0 6.809 1.405 9.176 3.771.738.74.738 1.852 0 2.592-.741.738-1.922.813-2.663.072-1.702-1.699-3.923-2.736-6.513-2.736-5.104 0-9.249 4.144-9.249 9.25 0 5.104 4.146 9.25 9.249 9.25 2.367 0 4.441-.813 6.067-2.222zm34.037-.666h-17.019v9.77a1.835 1.835 0 0 1-1.852 1.851 1.83 1.83 0 0 1-1.849-1.851V33.362c0-1.037.812-1.852 1.849-1.852 1.034 0 1.852.813 1.852 1.852v8.436h17.019v-8.436c0-1.037.813-1.852 1.849-1.852s1.852.813 1.852 1.852v21.754a1.83 1.83 0 0 1-1.852 1.851 1.833 1.833 0 0 1-1.849-1.851zm24.786 11.84a12.913 12.913 0 0 1-12.949-12.948c0-7.181 5.77-12.949 12.949-12.949 3.627 0 6.809 1.405 9.176 3.771.738.74.738 1.852 0 2.592-.741.738-1.925.813-2.666.072-1.699-1.699-3.92-2.736-6.51-2.736-5.106 0-9.249 4.144-9.249 9.25 0 5.104 4.143 9.25 9.249 9.25 2.59 0 4.884-.962 6.586-2.664.74-.741 1.849-.741 2.59 0 .738.738.738 1.85 0 2.589-2.368 2.367-5.55 3.773-9.176 3.773m38.621-11.84h-17.02v9.77a1.83 1.83 0 0 1-1.852 1.851 1.833 1.833 0 0 1-1.85-1.851V33.362c0-1.037.813-1.852 1.85-1.852 1.035 0 1.852.813 1.852 1.852v8.436h17.02v-8.436c0-1.037.813-1.852 1.853-1.852 1.034 0 1.849.813 1.849 1.852v21.754a1.83 1.83 0 0 1-1.849 1.851 1.834 1.834 0 0 1-1.853-1.851zm27.189-12.209 10.507 20.646c.223.443.445 1.036.445 1.554 0 1.036-.668 1.628-1.702 1.628-.741 0-1.481-.222-2.001-1.258l-3.253-6.438h-13.547l-3.183 6.438c-.517 1.036-1.256 1.258-1.994 1.258-1.037 0-1.702-.593-1.702-1.628 0-.519.22-1.109.442-1.554l10.506-20.646c.668-1.405 2.002-1.628 2.74-1.628.744 0 2.074.221 2.742 1.628m-7.773 12.58h9.988l-4.957-9.99zm39.174-14.06c4.441 0 8.064 3.255 8.064 7.694 0 3.923-2.813 6.884-6.511 7.549l6.731 7.104c.664.666.889 1.85.146 2.516-.736.741-2.145.521-2.886-.296l-8.729-9.176h-6.511v8.142c0 1.034-.815 1.774-1.854 1.774a1.833 1.833 0 0 1-1.85-1.851V33.51c0-1.035.814-1.85 1.85-1.85zm-9.691 3.552V43.5h9.691c2.59 0 4.367-1.776 4.367-4.146 0-2.365-1.777-4.144-4.367-4.144zm34.579 0h-9.249c-1.033 0-1.849-.74-1.849-1.776 0-1.034.813-1.773 1.849-1.773h22.201c1.037 0 1.852.74 1.852 1.773 0 1.037-.813 1.776-1.852 1.776h-9.249v19.905a1.83 1.83 0 0 1-1.849 1.851 1.834 1.834 0 0 1-1.854-1.851zm23.677 6.438c0-9.25 5.698-10.359 9.99-10.359 1.035 0 1.85.813 1.85 1.85a1.83 1.83 0 0 1-1.85 1.851c-3.479 0-6.29.738-6.29 6.66v5.18c0 9.25-5.698 10.358-9.989 10.358-1.035 0-1.85-.813-1.85-1.85s.814-1.85 1.85-1.85c3.479 0 6.289-.74 6.289-6.66z" stroke="none"/><g transform="matrix(.03 0 0 .03 388.024 51.291)"><circle cx="100" cy="100" r="88.5" fill="none" strokeWidth="20"/><path d="M94.6 92c5.5 0 9.5-1.1 11.9-3.2 2.4-2 3.7-5.4 3.7-10.2 0-4.7-1.3-8-3.7-10.1-2.4-2-6.4-3-11.9-3H83.4V92zm-11.2 18.3v39H56.8V46.2h40.6c13.6 0 23.5 2.3 29.8 6.9 6.4 4.5 9.5 11.7 9.5 21.6 0 6.8-1.6 12.4-4.9 16.8-3.3 4.3-8.2 7.6-14.9 9.6 3.7.9 6.9 2.8 9.8 5.7s5.8 7.3 8.7 13.3l14.5 29.2h-28.3L109 123.7c-2.5-5.1-5.1-8.7-7.7-10.5-2.6-1.9-6.1-2.9-10.4-2.9z" fill="#f0f0f0" stroke="none"/></g></g></svg>
  )
);

HighchartsIcon.displayName = 'HighchartsIcon';
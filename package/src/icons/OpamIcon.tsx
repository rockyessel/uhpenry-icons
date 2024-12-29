import * as React from 'react';
import { IconProps } from '../types';

export const OpamIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><defs><linearGradient id="a" x1="-745.623" y1="-92.76" x2="-745.623" y2="-85.108" gradientTransform="translate(758 113.28)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f29104"/><stop offset="1" stopColor="#ec6813"/></linearGradient><linearGradient id="b" x1="-741.99" y1="-109.477" x2="-741.99" y2="-85.099" xlinkHref="#a"/><linearGradient id="c" x1="-752.111" y1="-93.918" x2="-752.111" y2="-85.284" xlinkHref="#a"/></defs><path d="M16.571 25.246a4.3 4.3 0 0 0-.039-.709c-.059-.2-.2-.217-.3-.374a3.5 3.5 0 0 1-.532-1.477c-.02-.453-.2-.886-.217-1.339-.02-.217.02-.453 0-.669a2 2 0 0 0-.039-.315 1 1 0 0 0-.039-.2l.059-.138a2.7 2.7 0 0 1 .65-.039c.256 0 .512.02.768.02a8 8 0 0 0 1.536-.059 3.7 3.7 0 0 0 1.949-.847 4.95 4.95 0 0 0 1.536-2.008c.177-.394.177-1.083.551-1.4.433-.374 1.181-.335 1.693-.571a1.2 1.2 0 0 1 .807-.138c.217.039.63.315.729-.059-.079-.039-.1-.138-.138-.177.414-.039 0-1-.158-1.2A2.23 2.23 0 0 0 24.25 13a3.5 3.5 0 0 0-1.536-.217c-.886.177-.827-.335-1.339-.335-.63 0-1.733.039-1.93.63a1.5 1.5 0 0 1-.335.512c-.138.177.02.354-.039.571-.079.217-.177.985-.276 1.26-.177.453-.394 1.024-.788 1.024a3.15 3.15 0 0 1-1.437-.079c-.276-.1-.729-.256-.945-.335-1.024-.433-1.2-.906-1.2-.906a3 3 0 0 1-.512-.866c-.118-.414-.315-.768-.394-1s-.3-.591-.453-.985a2.7 2.7 0 0 0-.709-1.063c-.315-.276-.61-.729-1.26-.591a1.64 1.64 0 0 0-.866.315c-.217.177-.3.571-.492.886-.118.177-.315.709-.512 1.162a1.9 1.9 0 0 1-.335.65c-.118.079-.256.2-.414.138a.9.9 0 0 1-.315-.2 5.3 5.3 0 0 1-.709-1.122 11 11 0 0 0-.788-1.241 1.02 1.02 0 0 0-.985-.551c-1.024 0-1.1.571-1.556 1.418a5.6 5.6 0 0 1-.669 1.4c-.236.256-.945 1.339-1.457 1.516H2v7.62c.039-.1.059-.2.1-.276.2-.414.65-.807.906-1.221a3.5 3.5 0 0 0 .374-.709 3.7 3.7 0 0 1 .236-.709.8.8 0 0 1 .571-.335c.354-.059.65.492 1.083.709.2.079 1.063.394 1.319.453.433.1.906.2 1.339.276.236.039.453.079.709.1a7 7 0 0 1 1.083.1 2.28 2.28 0 0 0-.807 1.221c-.158.433-.276.925-.473 1.339-.217.473-.669.669-.61 1.221a2.7 2.7 0 0 1 .02.689 4 4 0 0 1-.217.689c-.1.315-.217 1.359-.354 1.674l.906-.118a11 11 0 0 0 .215-1.326 3.7 3.7 0 0 1 .729-1.28c.335-.374.315-.847.512-1.3a13 13 0 0 1 .768-1.3c.492-.807.807-1.812 1.851-2.028a3.3 3.3 0 0 1 1.024.709 4.5 4.5 0 0 1 .886 1.1 13 13 0 0 1 .886 2.678 1.23 1.23 0 0 0 .394.709 5.5 5.5 0 0 1 .433.729c.079.177.2.571.3.788a6 6 0 0 1 .315.827l.847-.02h.02v-.02a9.8 9.8 0 0 1-.794-2.734" style={{"fill":"#fff"}}/><path d="M16.217 27.235c-.1-.2-.217-.61-.3-.788a5.5 5.5 0 0 0-.433-.729 1.12 1.12 0 0 1-.394-.709 12.5 12.5 0 0 0-.886-2.678 4.5 4.5 0 0 0-.886-1.1 3.3 3.3 0 0 0-1.024-.709c-1.044.2-1.359 1.221-1.851 2.028a13 13 0 0 0-.768 1.3c-.2.433-.177.925-.512 1.3a3.4 3.4 0 0 0-.729 1.28c-.039.1-.118 1.083-.217 1.319l1.536-.1c1.437.1 1.024.65 3.249.532l3.525-.118a6 6 0 0 0-.31-.828" style={{"fill":"url(#a)"}}/><path d="M26.456 3.8H5.544A3.52 3.52 0 0 0 2.02 7.328v7.679c.512-.177 1.221-1.26 1.457-1.516a6 6 0 0 0 .669-1.4c.453-.827.532-1.418 1.556-1.418a1.02 1.02 0 0 1 .985.551 9.6 9.6 0 0 1 .788 1.241 5 5 0 0 0 .709 1.122 2 2 0 0 0 .315.2c.158.059.3-.059.414-.138A1.9 1.9 0 0 0 9.246 13c.2-.453.394-.965.512-1.162.2-.315.276-.709.492-.886a1.6 1.6 0 0 1 .866-.315c.65-.138.945.315 1.26.591a3.3 3.3 0 0 1 .709 1.063c.158.394.354.768.453.985a9 9 0 0 1 .394 1 3.7 3.7 0 0 0 .512.866s.177.473 1.2.906a9 9 0 0 0 .945.335 3.15 3.15 0 0 0 1.437.079c.394 0 .61-.571.788-1.024.1-.276.217-1.044.276-1.26s-.1-.374.039-.571c.158-.217.256-.236.335-.512.2-.61 1.3-.63 1.93-.63.532 0 .453.512 1.339.335a3.24 3.24 0 0 1 1.536.217 2.23 2.23 0 0 1 1.142.551c.158.2.571 1.162.158 1.2.039.039.079.138.138.177-.1.374-.492.1-.729.059a1.2 1.2 0 0 0-.807.138c-.512.217-1.241.2-1.693.571-.374.315-.374 1-.551 1.4a5.2 5.2 0 0 1-1.536 2.008 3.9 3.9 0 0 1-1.949.847 8 8 0 0 1-1.536.059c-.256-.02-.512-.02-.768-.02-.158 0-.669-.02-.65.039l-.059.138a.7.7 0 0 0 .039.2c.02.118.02.217.039.315 0 .217-.02.453 0 .669.02.453.2.866.217 1.339a3.26 3.26 0 0 0 .532 1.477c.1.158.236.177.3.374a4 4 0 0 1 .039.709 9.7 9.7 0 0 0 .827 2.757v.02c.512-.079 1.044-.276 1.713-.374 1.241-.177 2.954-.1 4.056-.2 2.8-.256 4.312 1.142 6.813.571V7.328A3.55 3.55 0 0 0 26.456 3.8M16.02 20.343" style={{"fill":"url(#b)"}}/><path d="M8.478 23.573c.2-.433.315-.906.473-1.339a2.28 2.28 0 0 1 .807-1.221 7 7 0 0 0-1.083-.1 8 8 0 0 1-.709-.1 27 27 0 0 1-1.339-.276c-.256-.059-1.142-.374-1.319-.453-.453-.2-.748-.768-1.083-.709a.8.8 0 0 0-.571.335 3.7 3.7 0 0 0-.236.709c-.1.236-.256.473-.374.709a12 12 0 0 0-.925 1.2c-.039.1-.059.2-.1.3v4.745a5.4 5.4 0 0 1 .729.158 8.8 8.8 0 0 0 4.371.354l.177-.02c.138-.315.256-1.359.354-1.674a6 6 0 0 0 .217-.689 2.7 2.7 0 0 0-.02-.689c-.038-.571.415-.768.631-1.24" style={{"fill":"url(#c)"}}/></svg>
  )
);

OpamIcon.displayName = 'OpamIcon';
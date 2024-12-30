import * as React from 'react';
import { IconProps } from '../types';

export const TwoCheckoutIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 299.999 74.589" 
        {...props} 
        ref={forwardedRef}><path d="M89.336 73.402 78.852 41.297c-.065-.264.066-.395.33-.395h7.186c.132 0 .263 0 .33.197l7.91 25.25c.264.923 1.187.923 1.45 0l7.78-25.25c.066-.197.198-.197.33-.197h7.12c.197 0 .329.131.263.395l-10.35 32.105c-.066.198-.132.198-.264.198H89.6c-.132 0-.198 0-.264-.198M111.48 57.38c0-9.619 6.145-17.467 16.406-17.467 11.548 0 16.888 9.232 16.212 18.72-.032.451-.193.612-.547.612h-24.8c.643 5.469 4.342 8.75 9.296 8.75 4.214 0 6.498-1.834 7.88-4.472.13-.193.258-.29.483-.29h6.723c.129 0 .258.097.258.29 0 .837-1.64 5.34-5.34 7.946-2.702 2.058-6.08 3.12-10.004 3.12-9.779 0-16.566-7.11-16.566-17.21m25.38-4.022c-1.19-4.6-4.47-6.851-9.103-6.851-4.407 0-7.559 2.573-8.749 6.852zm28.2-5.731h-2.76c-4.286 0-7.516 3.032-7.516 7.515v18.196a.283.283 0 0 1-.264.263h-6.658a.283.283 0 0 1-.264-.263V41.165c0-.132.132-.263.264-.263h6.197c.131 0 .263.131.263.263v3.428c0 .594.725.857 1.187.264 1.978-2.637 4.944-3.955 7.515-3.955h2.036c.132 0 .264.131.264.263v6.197a.284.284 0 0 1-.264.264m6.995-19.164c2.373 0 4.483 1.978 4.483 4.351s-2.11 4.351-4.483 4.351-4.483-1.977-4.483-4.35c0-2.374 2.11-4.352 4.483-4.352m-3.626 44.875V41.165c0-.132.132-.263.264-.263h6.592c.132 0 .264.131.264.263v32.172a.283.283 0 0 1-.264.263h-6.592a.283.283 0 0 1-.264-.263m14.965 0v-25.71h-4.475c-.131 0-.263-.133-.263-.265v-6.197c0-.131.132-.263.263-.263h4.475v-4.5c0-5.34 3.099-7.713 8.307-7.713h5.925c.132 0 .263.132.263.264v6.197a.284.284 0 0 1-.263.263h-4.343c-2.044 0-2.835.791-2.835 2.703v2.786h6.045c.132 0 .264.131.264.263v6.197a.284.284 0 0 1-.264.264h-6.045v25.71a.284.284 0 0 1-.263.264h-6.527a.283.283 0 0 1-.264-.263m13.952-16.02c0-10.416 7.054-17.404 16.81-17.404 9.89 0 16.944 7.054 16.944 17.404 0 10.218-7.054 17.272-16.943 17.272-9.757 0-16.811-7.054-16.811-17.272m16.81 10.482c5.736 0 9.824-4.022 9.824-10.482 0-6.592-4.022-10.614-9.823-10.614-5.67 0-9.625 4.088-9.625 10.614 0 6.395 4.021 10.482 9.625 10.482m20.386 5.538V41.165c0-.132.132-.263.264-.263h6.197c.132 0 .264.131.264.263v2.77c0 .593.79.856 1.252.263 1.78-2.374 4.483-4.088 8.9-4.088 7.45 0 12.46 4.945 12.46 12.46v20.766a.284.284 0 0 1-.264.264h-6.658a.284.284 0 0 1-.264-.263V54.284c0-4.614-2.967-7.383-7.252-7.383-4.483 0-7.713 3.098-7.713 7.581v18.855a.283.283 0 0 1-.264.263h-6.658a.283.283 0 0 1-.264-.263m32.781-15.957c0-9.619 6.144-17.467 16.405-17.467 11.548 0 16.888 9.232 16.212 18.72-.032.451-.193.612-.546.612h-24.801c.643 5.469 4.342 8.75 9.296 8.75 4.214 0 6.498-1.834 7.88-4.472.13-.193.258-.29.483-.29h6.723c.13 0 .258.097.258.29 0 .837-1.64 5.34-5.34 7.946-2.702 2.058-6.08 3.12-10.004 3.12-9.779 0-16.566-7.11-16.566-17.21m25.38-4.022c-1.19-4.6-4.471-6.851-9.104-6.851-4.406 0-7.559 2.573-8.749 6.852zM54.518 49.836c5.382 0 9.785-4.403 9.785-9.785 0-2.936-1.467-5.48-3.376-7.437-2.006-1.957-4.452-3.914-4.452-7.241s2.446-5.284 4.452-7.241c1.909-1.957 3.376-4.501 3.376-7.437C64.303 5.313 59.9.91 54.518.91c-5.43 0-9.785 4.403-9.785 9.785 0 2.936 1.419 5.48 3.327 7.437 2.006 1.957 4.452 3.914 4.452 7.24s-2.446 5.285-4.452 7.242c-1.908 1.957-3.327 4.501-3.327 7.437 0 5.382 4.354 9.785 9.785 9.785"/><circle cx="32.152" cy="63.815" r="9.785"/><circle cx="9.785" cy="40.051" r="9.785"/><circle cx="9.785" cy="10.695" r="9.785"/><g/></svg>
  )
);

TwoCheckoutIcon.displayName = 'TwoCheckoutIcon';
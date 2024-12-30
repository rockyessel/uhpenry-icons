import * as React from 'react';
import { IconProps } from '../types';

export const AuthorizeNetIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 400 400" 
        {...props} 
        ref={forwardedRef}><path d="M0 0h400v400H0z" fill="#1F2945"/><path d="M241.574 71.176C262.813 89.816 276.896 113.464 283 141l.564 2.544c1.426 7.036 1.786 13.85 1.748 21.018-.005 1.139-.01 2.277-.017 3.45-.42 29.457-10.724 56.258-29.295 78.988l-1.973 2.46c-7.142 8.544-15.744 15.465-25.027 21.54l-2.887 1.965c-25.793 16.86-59.96 22.384-90.119 16.908C118.507 286.099 98.774 278.72 85 267v-2l-2.234-.785C70.683 258.908 62.028 244.635 55 234l-1.52-2.285c-16.713-26.415-22.965-60.25-16.246-90.759A255 255 0 0 1 39 134l.551-2.056c4.722-16.898 13.335-31.454 24.011-45.194.46-.591.92-1.182 1.392-1.792 18.671-23.634 48.253-39.28 77.987-42.87 36.005-3.975 70.84 5.596 98.633 29.088" fill="#3974FD"/><path d="M324.387 272.668c7.146 6.377 11.748 14.253 14.613 23.332l.578 1.79c2.521 13.212.051 26.431-6.703 37.96-7.978 11.563-18.244 18.07-31.98 20.887C286.66 358.423 274.79 355.082 263 347l-2.687-1.75c-9.912-9.644-15.352-22.6-15.625-36.312-.03-13.075 5.145-24.695 14.062-34.188 18.984-17.9 45.379-17.526 65.637-2.082" fill="#FDC202"/><path d="m262 273-1.793 1.8c-10.297 10.802-14.755 22.342-14.52 37.282.958 12.01 6.055 23.983 15.313 31.918.55.48 1.1.96 1.668 1.453 10.35 8.451 22.21 11.413 35.332 10.547 7.23-1.158 13.516-3.432 19.941-6.914C320 348 320 348 323 347l-1 5-8 1v2l-2 2 1 3q-6.486-.141-12.97-.317-2.205-.058-4.408-.105a940 940 0 0 1-6.352-.164l-3.857-.095c-3.222-.301-5.51-.937-8.413-2.319v-2l-2.437-.312c-5.819-1.123-11.307-2.941-16.563-5.688h2l-2-1.75c-2-2.25-2-2.25-2-6.25h-2v-2l-1.896-.764c-2.507-1.473-2.873-2.296-3.772-5.01l-.768-2.25-.751-2.351-.788-2.328c-1.14-3.41-2.183-6.8-3.025-10.297h-2q.21-3.97.438-7.937l.119-2.288c.33-5.662.33-5.662 1.443-6.775.04-1.666.043-3.334 0-5l-2 4v-2h-2l1-4h2l1-4h4v-2h3v-4h2c1.12-2.092 1.965-3.762 2.313-6.125.687-1.875.687-1.875 3.125-3.187C260 272 260 272 262 273" fill="#2E2D22"/><path d="M324.371 272.629c4.321 3.897 7.5 8.494 10.629 13.371l-1 2-1.312-1.937c-1.6-2.33-1.6-2.33-4.688-3.063v-4h-6l-1-6c-4.916-1.52-4.916-1.52-10-2q-3.505-.474-7-1v-4c-10.288-2.438-20.67-1.831-30.45 2.027-2.512.959-4.904 1.52-7.55 1.973 16.165-15.608 42.4-9.39 58.371 2.629" fill="#F6C31F"/><path d="M270 106h2a860 860 0 0 1 3.438 7.063l.986 1.99c2.088 4.37 3.13 8.119 3.576 12.947h2l.621 3.324 1.225 6.549.4 2.139.365 1.952q.406 2.113.926 4.203c.662 4.052.626 8.05.631 12.15l.01 2.707q.007 2.825.007 5.65c.002 2.882.02 5.763.04 8.644q.005 2.75.005 5.498l.022 2.608-.01 2.438.005 2.134c-.289 2.343-1.178 3.914-2.247 6.004l-.312 3.563C283.12 203.13 280.73 208.16 278 213l-2 1 .516-1.809a492 492 0 0 0 4.609-17.879l.517-2.12c6.79-28.73 1.598-58.202-11.642-84.192z" fill="#142E69"/><path d="M214 281v2l2 1c-1.692 2.042-2.637 2.918-5.262 3.512l-2.425.175-2.45.2L204 288v-2l-3.75 1c-2.996.799-5.051 1-8.25 1v2c-5.361 1.129-10.553 1.097-16 1v2h-32v-2l2.392-.044c21.465-.442 42.395-1.395 62.374-10.17C211 280 211 280 214 281" fill="#1C2B63"/><path d="M278 126c10.979 16.468 8.846 45.018 5.492 63.622-4.406 21.292-4.406 21.292-9.492 26.378.69-5.629 1.664-11.024 4-16.227 1.247-3.457 1.66-6.893 2.063-10.523.811-7.124.811-7.124 1.937-8.25.289-4.492.24-9 .25-13.5l.006-2c.008-10.578-1.006-20.195-3.256-30.5-.42-3-.726-5.982-1-9" fill="#3F70D8"/><path d="M38 134c1.453 3.887.502 6.793-.437 10.75-5.855 28.446.69 58.365 14.824 83.383 1.638 2.911 3.14 5.869 4.613 8.867l-2 1c-4.119-3.57-5.437-7.026-6.437-12.312L48 224l-3-1c-.483-1.828-.949-3.662-1.34-5.512-.76-2.865-1.885-5.409-3.097-8.113C37.71 202.755 36.305 196.063 35 189l-.523-2.263c-1.031-5.922-.719-12.048-.727-18.05l-.006-2.181C33.728 142.545 33.728 142.545 38 134" fill="#142E68"/><path d="m292.25 258.75 2.238-.062c5.304-.038 8.731 1.052 13.512 3.312 2.349.544 2.349.544 4.438.688L316 263v-2h3l1 3-2 1 2.5 1.375L323 268v2h2v3c-3.19-1.558-6.278-3.265-9.375-5-11.954-6.516-23.573-7.492-36.621-3.992-4.603 1.52-8.765 3.665-13.004 5.992q-1.995 1.009-4 2c2.065-4.887 5.396-6.659 10-9 2.96-1.16 5.95-2.11 9-3 3.77-1.257 7.322-1.223 11.25-1.25" fill="#262B18"/><path d="m262 273-1.793 1.8c-6.464 6.781-10.258 13.352-13.207 22.2h-2l-1 21-1-2h-2q.21-3.97.438-7.937l.119-2.288c.33-5.662.33-5.662 1.443-6.775.04-1.666.043-3.334 0-5l-2 4v-2h-2l1-4h2l1-4h4v-2h3v-4h2c1.12-2.092 1.965-3.762 2.313-6.125.687-1.875.687-1.875 3.125-3.187C260 272 260 272 262 273" fill="#222B34"/><path d="M235 262h5c-3.862 4.192-7.956 7.107-12.812 10.063l-2.042 1.275c-10.709 6.61-28.661 17.587-41.486 15.232L182 288c5.415-3.109 9.398-4.337 15.602-4.719 3.52-.413 6.203-1.781 9.398-3.281h3l2-4h6v-3l8-4-1-2 2.75-.375c2.84-.546 4.776-1.198 7.25-2.625z" fill="#3F70D7"/><path d="M86 267c.574.4 1.147.802 1.738 1.215C104.763 279.607 123.712 287.065 144 290v1c-6.723.25-12.29-.874-18.732-2.666-4.842-1.256-8.36-1.36-13.268-.334v-4l-4-1v2l-4 1v-4h2v-2l-2.625-.312C99.818 278.963 97.189 277.7 94 276l-3-1v-3h-2v-2l-3-1z" fill="#172A64"/><path d="m288.75 263.938 2.984.027L294 264v1l-5 1-1 3-5 1v2c-.736-.095-1.472-.19-2.23-.29-.976-.11-1.952-.22-2.957-.335l-2.918-.352c-3.998-.032-6.692 1.046-9.832 3.477-2.54 1.847-5.068 2.615-8.063 3.5 6.32-9.874 20.367-14.198 31.75-14.062M277 268l1 3 1-3z" fill="#F9C208"/><path d="m151.742 39.867 2.204-.003q2.296 0 4.594.006 3.481.005 6.964-.007 2.244 0 4.488.004l2.072-.006c6.916.033 13.11.624 19.573 3.24C196.66 45.012 201.854 46.456 207 48l-1 2-1.555-.516C181.768 42.307 160.586 41.518 137 43l1-2c4.554-1.09 9.084-1.147 13.742-1.133" fill="#172F6B"/><path d="M340 300h2q.04 4.438.063 8.875l.025 2.55.01 2.442.016 2.254C342 318 342 318 341 320a121 121 0 0 0-.562 5.125l-.254 2.758L340 330h-2l-1 5h-2l-.312 1.938L334 339l-3 1v3c-2.888 2.108-4.385 3-8 3l1.54-1.547c9.953-10.513 14.49-22.145 15.085-36.453l.117-2.348q.138-2.825.258-5.652" fill="#413B15"/><path d="M38 138h1q.039 3.468.063 6.938l.035 3.902C39 152 39 152 38 153c-.259 3.512-.19 7.042-.187 10.563l-.002 3.148c.05 7.457.62 14.647 1.752 22.012.418 3.138.514 6.116.437 9.277-9.399-16.51-6.346-42.411-2-60" fill="#3F69CF"/><path d="M75 74h2c-1.12 3.36-2.372 4.69-5 7h-2l-2 6h-2l-1 3-2 1-1 3h2v3h-2l-1 6-1-3c-3.004.695-3.004.695-6 2-.843 1.872-.843 1.872-1 4a88 88 0 0 1-2 4h-2c3.282-8.582 8.364-15.678 14.063-22.812l1.534-1.922C67.553 81.626 70.624 78.256 74 75z" fill="#436DDB"/><path d="M63 244c2.25.063 2.25.063 5 1 1.653 2.18 2.78 4.56 4 7 1.635 3.125 1.635 3.125 4.125 3.688L78 256v2h2v-2l4 1-3 1v3l4 1v2l2.188.688C91.08 266.504 94.06 269.123 96 273c-4.108-1.45-7.503-3.398-11-6v-2l-2.23-.781C74.42 260.545 68.185 252.248 63 245z" fill="#3F70D2"/><path d="M275 214h1c.495 7.3.495 7.3-1.812 10.563L272 227a62 62 0 0 0-1.562 3.688C269 234 269 234 266 236l-.875 2.313c-1.413 3.374-3.546 5.108-6.125 7.687a76 76 0 0 0-2.062 3.688c-1.85 3.161-2.545 4.221-5.938 5.312 0-3 0-3 2-6h2l.797-1.71c1.303-2.48 2.812-4.646 4.453-6.915 5.926-8.397 10.692-16.93 14.75-26.375" fill="#152E6B"/><path d="M336 325c1 3 1 3-.187 5.672-5.174 8.787-11.035 17.247-20.813 21.328l-3-1h2v-3l2.25-.812c2.682-1.159 4.647-2.163 6.75-4.188v-4h5l1-5 4-1v-4h2z" fill="#E1B936"/><path d="M178 42v2l-2.212-.016q-5.05-.029-10.1-.047l-3.479-.025C149.939 43.67 149.939 43.67 138 46a99 99 0 0 1-5.187.063l-2.731-.028L128 46v-1c16.775-3.347 32.889-5.163 50-3" fill="#3E6CCE"/><path d="M312 265c-3.516 1.172-5.306.447-8.789-.498-3.59-.815-7.106-.831-10.774-.815l-2.17-.048c-5.171-.005-8.628 1.083-13.267 3.361-7.494 3.169-7.494 3.169-11 2 15.816-8.642 29.027-10.093 46-4" fill="#CEAF41"/><path d="M245 297c1.209 3.7.962 7.076.813 10.938C245.626 319.7 249.456 329.315 256 339l2 3-2 1v-2h-2v-2l-1.797-.54c-3.291-2.182-4.19-5.247-5.453-8.835l-.797-2.243c-2.94-9.168-4.043-21.111-.953-30.382" fill="#41350B"/><path d="M214 281v2l2 1c-1.692 2.042-2.637 2.918-5.262 3.512l-2.425.175-2.45.2L204 288v-2l-8 1c2.565-2.565 5.06-3.374 8.438-4.687l3.496-1.387C211 280 211 280 214 281" fill="#1C2951"/><path d="M325 273h5v5l2.938-.062C336 278 336 278 337 279c1.44 6.93 2.296 13.962 3 21-1.646-3.128-2.878-6.32-4.125-9.625-2.306-5.644-5.334-9.914-9.3-14.512C325 274 325 274 325 273" fill="#333020"/><path d="M181 43c8.612 1.334 16.565 3.333 24.688 6.5l2.32.899c3.711 1.494 6.93 2.951 9.992 5.601-6.625 1-6.625 1-10 1l1-3c-5.549-2.818-9.741-4.533-16-4v-2l-12-3z" fill="#4070D8"/><path d="M335 288c5.307 5.307 5.286 13.53 5.313 20.625l.016 2.133c-.067 5.018-.967 9.414-2.329 14.242h-1c.01-.69.02-1.38.032-2.092.042-3.157.067-6.314.093-9.47l.05-3.292c.036-5.836-.296-10.625-2.175-16.146-.125-3.437-.125-3.437 0-6" fill="#EDBF40"/><path d="M313 266c10.374 4.829 15.528 10.62 22 20l-1 2-1.312-1.937c-1.6-2.33-1.6-2.33-4.688-3.063v-4h-6l-.437-1.812c-.778-3.684-.778-3.684-3.192-6.356l-1.933-1.02L313 268z" fill="#E7C32F"/><path d="M112 281c5.529-.251 5.529-.251 7.875 1 2.612 1.23 4.504 1.2 7.375 1.125l2.703-.055L132 283v2h2v2l3 1c-3.042.965-4.916 1.006-7.969.11l-2.23-.653-2.301-.707-2.3-.66c-3.933-1.178-7.094-2.281-10.2-5.09" fill="#3A72E0"/><path d="M219 56c10.184 4.505 18.715 11.656 27 19l-2 2-2.125-2.312c-2.718-2.803-2.718-2.803-6.062-4.25-3.172-1.621-3.34-2.394-4.813-5.438-2.343-1.12-2.343-1.12-5-2-2.812-1.5-2.812-1.5-5-3v-2h-2z" fill="#3F6FD3"/><path d="M273 218c-1.507 9.185-7.653 16.619-13 24-.582-1.914-.582-1.914-1-4a101 101 0 0 1 3-3c1.2-3.1 1.2-3.1 2-6h3l.313-3.812c.334-2.697.517-3.951 2.125-6.188 1.562-1 1.562-1 3.562-1" fill="#4372D9"/><path d="M252 286h3a85 85 0 0 1-2 7l1 3c-1.312 2.188-1.312 2.188-3 4h-2l-1 7h-1c-.429-7.86 1.394-14.038 5-21" fill="#FAC210"/><path d="m76 71 3 1-2.562 2C72.503 77.276 69.28 81.086 66 85l-1.555 1.848Q62.715 88.918 61 91c0-3.38.875-5.835 2-9h3v-2h-2l1-4 1.75.75L69 77a91 91 0 0 0 4-4h3z" fill="#1B2D60"/><path d="m257 242 1 3c-11.337 12.854-11.337 12.854-18 17v-4h4v-2l2-1 .375-1.937L247 251l2-.937 2-1.063.438-2.5.562-2.5c2.563-1.312 2.563-1.312 5-2" fill="#426DCE"/><path d="M250 329h4v4h2c2.875 6.625 2.875 6.625 4 10l1.813.438c2.96.76 4.15 2.329 6.187 4.562l1.75 1.75L271 351c-9.25-2.89-15.324-9.786-20-18-.691-2.305-.691-2.305-1-4" fill="#E2BC3A"/><path d="m61 92 1 2h2v3h-2l-1 6-1-3c-3.004.695-3.004.695-6 2-.843 1.872-.843 1.872-1 4a88 88 0 0 1-2 4h-2c1.332-3.587 2.77-6.877 5-10h3l.313-1.75c.785-2.57 1.992-4.187 3.687-6.25" fill="#3D71E6"/><path d="M246 76c8.619 6.785 15.744 15.364 21 25l-1 2-2-2v-3l-3-1c-1.43-1.855-1.43-1.855-2.875-4.187-3.09-4.819-6.32-9.057-10.437-13.063C246 78 246 78 246 76" fill="#416ED4"/><path d="m262 273-1.793 1.8c-5.028 5.275-8.516 10.08-11.234 16.852C248 294 248 294 246 297c.497-5.661 1.545-9.877 4-15h2c1.12-2.092 1.965-3.762 2.313-6.125.687-1.875.687-1.875 3.125-3.187C260 272 260 272 262 273" fill="#3D320F"/><path d="M249 254c.57 1.871.57 1.871 1 4-1.93 3.537-4.534 5.084-8 7l-1 1c-1.666.04-3.334.043-5 0 4.123-4.252 8.513-8.136 13-12" fill="#152B53"/><path d="m235 266 1 3-3 1a499 499 0 0 0-3 4h-2c-2.797 1.532-5.532 3.156-8.273 4.785C217 280 217 280 214.648 279.684L213 279l2.02-1.066c6.868-3.68 13.459-7.67 19.98-11.934" fill="#182D6E"/><path d="M276 268c-1 2-1 2-2.707 2.746l-2.106.692c-3.228 1.135-5.467 2.477-8.187 4.562a100 100 0 0 1-6 2c4.177-6.045 11.184-12.605 19-10" fill="#F0BF25"/><path d="M49 216c2.879 3.14 3.58 6.004 4.457 10.04.514 2.196.514 2.196 2.23 4.773L57 233l-1 3a2323 2323 0 0 1-3.875-6.687l-1.105-1.897c-1.957-3.398-3.676-6.717-5.02-10.416z" fill="#4271DE"/><path d="M96 273c6.098-.498 9.15.508 14 4 .938 2.25.938 2.25 1 4-5.48-1.545-10.114-4.155-15-7z" fill="#3E6FDB"/><path d="M126 47c-5.578 2.94-10.853 5.53-17 7v2h-7c3.84-3.4 8.406-4.938 13.125-6.75l2.496-.996 2.387-.926 2.176-.847C124 46 124 46 126 47" fill="#406BD1"/><path d="M328 283c2.572.355 3.797.804 5.688 2.625 1.701 3.08 1.978 5.9 2.312 9.375-2.937-.75-2.937-.75-6-2-.875-2.125-.875-2.125-1-4h3v-3h-2v-2z" fill="#FAC40C"/><path d="m337 331 1 3-3 1-.5 2-.5 2-3 1v3c-2.888 2.108-4.385 3-8 3q1.873-2.126 3.75-4.25l2.11-2.39c1.993-2.198 3.952-4.356 6.14-6.36h2z" fill="#332D1B"/><path d="M240 70c4.932 1.233 7.218 2.72 10 7v2l1.797.773c2.415 1.345 3.715 2.72 5.453 4.852l1.578 1.914L260 88l-1 2-1.574-1.793c-4.668-5.289-9.274-10.473-14.738-14.957L240 71z" fill="#14316B"/><path d="M310 355c-4.13 4.13-10.006 3.183-15.5 3.188l-2.59.037-2.504.005-2.271.013c-2.413-.275-4.04-1.045-6.135-2.243l3.402.07c7.41.105 19.233-3.192 25.598-1.07" fill="#3B340F"/><path d="M247 308c2.493 3.74 2.402 6.431 2.656 10.82L250 321l2 1-2 7c-3.923-3.923-3.056-10.186-3.062-15.437q.022-2.782.062-5.563" fill="#F2C021"/><path d="M316 261h3l1 3-2 1 2.5 1.375L323 268v2h2v3c-3.836-1.563-6.136-4.064-9-7a97 97 0 0 0-4-3h4z" fill="#252A31"/><path d="M55 91q2.514.428 5 1-1.65 2.66-3.312 5.313l-1.864 2.988C53.337 102.5 51.96 104.233 50 106c.875-4.75.875-4.75 2-7h2l-.062-3.437C54 92 54 92 55 91m-3 2 2 1-2 1z" fill="#172D6F"/><path d="M45 117h1c.417 1.933.808 3.872 1.188 5.813l.667 3.269C48 129 48 129 46.551 130.887L45 132v-5l-3 1c.551-3.95 1.39-7.35 3-11" fill="#3970E3"/><path d="M196 286v2h-4v2c-4.353.84-8.444 1.108-12.875 1.063l-3.492-.028L173 291v-1l3.578-.621 4.672-.817 2.355-.408 2.286-.4 2.094-.365a70 70 0 0 0 4.147-.936C194 286 194 286 196 286" fill="#173071"/><path d="M252 320h3l1 8h-2l-1-4-1 6-2-1c-.25-5.625-.25-5.625 2-9" fill="#FBC20F"/><path d="M242 336h3l2 9-3 2-2-1z" fill="#23254F"/><path d="M88 60h6c-4.247 3.451-8.611 6.733-13 10l-1-3c5.75-4 5.75-4 8-4z" fill="#142E6C"/><path d="M257 336h4l1 5h3l2 6-3-1v-2l-1.812-.25c-2.838-.973-3.685-2.194-5.188-4.75z" fill="#F5C317"/><path d="M335 288c3.264 3.264 4.097 7.546 5 12-.036 2.525-.409 4.527-1 7h-1l-.402-2.59-.536-3.348-.527-3.34c-.253-2.626-.253-2.626-1.535-3.722-.04-2-.043-4 0-6" fill="#E1BC35"/><path d="m229 272 1 3c-1.827 2.463-3.23 3.834-6.27 4.488-2.245.237-4.475.416-6.73.512 3.473-2.962 6.886-5.037 11-7z" fill="#1C2854"/><path d="m92 61 1 2c-1 2-1 2-3.5 3.438-2.792 1.375-2.792 1.375-3.5 4.562l-7 1c3.97-4.218 8.308-7.612 13-11" fill="#4270D7"/><path d="M77 64c-1.555 3.817-4.036 6.192-7 9l-3-1c2.165-4.216 4.84-8 10-8" fill="#192D4C"/><path d="M106 280c4.22.48 6.797 1.166 10 4-2.606.93-3.642 1.15-6.25.063L108 283v2l-4 1v-4h2z" fill="#182B53"/><path d="M325 273h5l.75 2.688c1.29 3.416 2.85 5.592 5.25 8.312l-2 2c-3.23-4.213-6.392-8.363-9-13" fill="#3B3414"/><path d="M297 261c7.352-.553 12.512.49 19 4v3l-2.379-1.059c-5.571-2.413-10.538-4.526-16.621-4.941z" fill="#45370C"/><path d="M40 198c2 2 2 2 3 5.563L44 207l2 1c.594 2.649.742 5.292 1 8h-2q-1.26-3.37-2.5-6.75l-.723-1.922C40.552 203.968 40 201.631 40 198" fill="#466FD6"/><path d="M112 281c4.68-.278 7.676.452 11.875 2.5l2.93 1.406L129 286c-4.077 1.685-6.83.17-10.75-1.437l-3.547-1.434L112 282z" fill="#426CCD"/><path d="M64 232v5h-2l-1-4c2-1 2-1 3-1m-5 3 3 2c.188 2.625.188 2.625 0 5l2 1h-3l-4-7z" fill="#3D72E8"/><path d="M222 57c7.878.757 7.878.757 11 4 .75 2.188.75 2.188 1 4a90 90 0 0 1-8.25-4.562l-2.14-1.317L222 58z" fill="#172E63"/><path d="M340 289h2c1.46 2.647 2 3.894 2 7h-3l-1 4a491 491 0 0 1-.562-4.375l-.317-2.46C339 291 339 291 340 289" fill="#232936"/><path d="m258 244 2 1a249 249 0 0 1-2.25 3.875l-1.266 2.18c-1.643 2.154-3 2.936-5.484 3.945 0-3 0-3 2-6h2l.938-1.937C257 245 257 245 258 244" fill="#172D5B"/><path d="M313 266c5.352 2.492 9.71 4.924 14 9v2c-2.079-.932-3.728-1.716-5.312-3.375-2.567-2.471-5.568-3.918-8.688-5.625z" fill="#D4B93E"/><path d="M196 285c-2.13 2.13-3.04 2.476-5.875 3.188l-2.055.542c-2.298.3-3.876-.036-6.07-.73 4.945-2.924 8.183-4.745 14-3" fill="#4172DE"/><path d="M281 264c-3.467 3.034-7.53 4.935-12 6l-3-1a595 595 0 0 1 5.813-3.062l3.269-1.723C278 263 278 263 281 264" fill="#D3B838"/><path d="M272 355h5v2h2l-2 4-5-1z" fill="#1E2A35"/><path d="M308 267c5.281.515 8.572 2.255 13 5l-2 1-2.812-1.5c-3.453-1.625-4.647-1.646-8.188-.5z" fill="#F7C10F"/><path d="m278 264-16 8c1.287-4.005 3.721-5.316 7.258-7.18 3.51-1.652 5.001-2.067 8.742-.82" fill="#3C370A"/><path d="M261 92c3.618 1.433 4.97 3.046 6.813 6.438l1.332 2.37C270 103 270 103 269 106q-1.44-2.373-2.875-4.75l-1.617-2.672A92 92 0 0 1 261 92" fill="#162D6C"/><path d="m61 80 1 2c-1.437 2.625-1.437 2.625-3 5l-4-1 1-3h2v-2z" fill="#26264D"/><path d="M321 347h2l-1 5-2.625.438L316 353l-6 1c2.002-2.002 3.536-2.857 6.063-4.062 2.664-1.19 2.664-1.19 4.937-2.938" fill="#3B3111"/><path d="M288 261v1l-16 2 1-2c5.53-1.812 9.327-2.182 15-1" fill="#342E1A"/><path d="M341 318c1.563 1.188 1.563 1.188 3 3-.312 2.688-.312 2.688-1 5l-3 1c-.125-6.75-.125-6.75 1-9" fill="#1D2B35"/><path d="m74 257 1.39 1.207c3.133 2.704 6.249 5.373 9.61 7.793l-2 2-5-5-2.312-2.187C74 259 74 259 74 257" fill="#182D66"/><path d="M330 343c-1.443 3.366-3.333 5.51-6 8l2 1h-4c.299-3.588.77-4.782 3.438-7.312C328 343 328 343 330 343" fill="#252C37"/><path d="M251 334c2.648 2.578 4.944 4.916 7 8l-2 1v-2h-2v-2l-4-2z" fill="#423412"/><path d="M328 283c2.755.38 3.82.807 5.75 2.875C335 288 335 288 335 291h-2l-1-5h-2v-2z" fill="#F5C218"/><path d="M57 237c2.6 2.51 4.99 4.986 7 8v2l-3-1v-2l-3-1z" fill="#1C3571"/><path d="M270 343h2l-.625 1.75c-.462 2.77.196 3.896 1.625 6.25-4.875-1.75-4.875-1.75-6-4h2z" fill="#F8C014"/><path d="M84 266a105 105 0 0 1 5 4v2l2 1c-5.75-.75-5.75-.75-8-3 .375-2.125.375-2.125 1-4" fill="#1C2757"/><path d="M76 256h2v2h2v-2l4 1-3 1v3l-4-1z" fill="#4073E8"/><path d="m257 242 1 3c-1.312 1.5-1.312 1.5-3 3h-3v-4z" fill="#4170DD"/><path d="m268 274 2 3-1 3h-4c.573-2.867.861-3.861 3-6" fill="#FAC310"/><path d="M271 218h2l-1 5-4 1c.573-2.867.861-3.861 3-6" fill="#3C72E2"/><path d="M41 128h1c.125 7.75.125 7.75-1 10h-2c.875-7.75.875-7.75 2-10" fill="#456DD8"/><path d="M55 91q2.514.428 5 1c-1.375 2-1.375 2-3 4h-2c-.562-1.937-.562-1.937-1-4zm-3 2 2 1-2 1z" fill="#1A2D59"/><path d="m63 82 4 1-6 8c0-3.38.875-5.835 2-9" fill="#1A336F"/><path d="M317 342h3l1 3-1 2h-4z" fill="#FBBE11"/><path d="M248 337c2 2 2 2 2.125 4.625L250 344l-3-1-1-5z" fill="#1B2D32"/><path d="M334 322h3c-.75 4.75-.75 4.75-3 7-1.125-4.75-1.125-4.75 0-7" fill="#F8C11C"/><path d="M309 349h5v2l-7 2z" fill="#F8C11B"/><path d="M214 281v2c-2.606.93-3.642 1.15-6.25.063L206 282c4.625-2.125 4.625-2.125 8-1" fill="#193265"/><path d="M318 268h5v2h2v3c-2.884-1.293-4.872-2.66-7-5" fill="#3E3612"/><path d="M243 259c0 3.517-.824 4.371-3 7l-4-1z" fill="#193272"/><path d="m64 247 7 6-3 2c-4-5.75-4-5.75-4-8" fill="#1A2F69"/><path d="m268 224 3 1-4 7c-1.208-3.623-.543-4.641 1-8" fill="#406BC8"/><path d="M279 197h2l-2 9h-1c-.098-6.152-.098-6.152 0-8z" fill="#4470D1"/></svg>
  )
);

AuthorizeNetIcon.displayName = 'AuthorizeNetIcon';
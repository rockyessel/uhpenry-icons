# unsource-icons

## Overview

`unsource-icons` is an open-source package providing developers with a library of beautifully crafted, fully colored, and customizable tech-related icons. The library includes icons for popular frameworks, libraries, programming languages, and more. Each icon represents its respective technology with vibrant and authentic branding colors, making them ideal for enhancing the aesthetics of your project.

---

## Features

- **Extensive Library**: Icons for technologies like React.js, TailwindCSS, Docker, Python, and many more.
- **Customizable Size**: Easily resize icons to suit your design needs.
- **Fully Colored**: Icons come with standard colors representing their respective brands.
- **Ease of Use**: Simple imports and straightforward integration.

---

## Installation

To install the package, run:

```bash
npm install unsource-icons
```

or

```bash
yarn add unsource-icons
```

---

## Usage

### Basic Usage

To use an icon, import it and render it in your React component:

```jsx
import React from 'react';
import { ReactJsIcon, TailwindCSSIcon } from 'unsource-icons';

const App = () => (
  <div>
    <ReactJsIcon size={40} />
    <TailwindCSSIcon size={50} />
  </div>
);

export default App;
```

### Customizing Icons

Icons can be resized and styled using props like `size` and `className`:

```jsx
<ReactJsIcon size={60} className='custom-class' />
```

---

## API

### `Icon Components`

All icons are available as individual React components. You can import only the icons you need to optimize bundle size.

### `getIcon`

Dynamically fetch an icon by name:

```javascript
import { getIcon } from 'unsource-icons';

const MyIcon = getIcon('React.js');
```

---

## Available Icons

The library includes icons for various categories, such as:

- **Frameworks**: React.js, Angular.js, Vue.js, Svelte, Next.js
- **Programming Languages**: JavaScript, Python, Java, Ruby, PHP, Go, Rust
- **Tools**: Docker, Webpack, Vite, Rollup, Git
- **CSS Frameworks**: TailwindCSS, Material UI, Ant Design

---

## Contributing

We welcome contributions! If you want to add more icons or improve the package, feel free to:

1. Fork the repository.
2. Make your changes.
3. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Feedback

We’d love to hear your thoughts! Reach out with feedback or feature requests to help us improve the package.

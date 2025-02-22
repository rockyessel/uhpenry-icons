# Uhpenry Icons

**Uhpenry Icons** is a lightweight React library for dynamically rendering SVG icons without fetching them from a server or making additional HTTP requests. This package allows you to store, manage, and render SVG icons efficiently with support for dark and light themes.

## 🚀 Features
- 📦 **No External Requests** – Icons are embedded as React components.
- 🎨 **Dark & Light Mode Support** – Automatically switches based on theme.
- ⚡ **Fast & Efficient** – No need for extra network calls.
- 🔄 **Easy to Extend** – Add your own custom icons.
- 🛠️ **Lightweight** – No bloated dependencies.

---

## 📥 Installation

Install via npm:
```sh
npm install uhpenry-icons
```
Or via yarn:
```sh
yarn add uhpenry-icons
```

---

## 🔧 Usage

### **Import and Use an Icon**
```tsx
import { IconRenderer, icons } from "uhpenry-icons";

const MyComponent = ({ tech, theme }) => {
  return <IconRenderer svgString={icons[tech][theme]} className="w-10 h-10" />;
};
```

### **Example Usage**
```tsx
import { IconRenderer, icons } from "uhpenry-icons";

export default function App() {
  return (
    <div>
      <h1>Technology Icons</h1>
      <IconRenderer svgString={icons.react.light} className="w-10 h-10" />
      <IconRenderer svgString={icons.nextjs.dark} className="w-10 h-10" />
    </div>
  );
}
```

---

## 📂 Available Icons
The package includes icons for various technologies. Each icon has two versions: `light` and `dark`. Example:
```json
{
  "react": {
    "light": "<svg>...</svg>",
    "dark": "<svg>...</svg>"
  },
  "nextjs": {
    "light": "<svg>...</svg>",
    "dark": "<svg>...</svg>"
  }
}
```

You can find the full list of supported icons in the `icons.json` file.

---

## 🌟 Adding Custom Icons
The SVG icons are sourced from the [SVGL repository](https://github.com/pheralb/svgl/tree/main?tab=readme-ov-file). If you want to add new icons, please contribute to that repository first. Every Monday, the latest updates from SVGL are published in this package.

To add a custom icon manually, you can modify the `icons.json` file:
```json
{
  "yourTech": {
    "light": "<svg>Your SVG Code Here</svg>",
    "dark": "<svg>Your SVG Code Here</svg>"
  }
}
```

Then, you can use it like this:
```tsx
<IconRenderer svgString={icons.yourTech.light} />
```

---

## 💡 Why Use Uhpenry Icons?
✅ No external dependencies required  
✅ Faster than loading icons from a CDN  
✅ Works seamlessly with dark mode  
✅ Easily extendable with new icons  

---

## 🔄 Contributing
We welcome contributions! If you want to add more icons or improve the package:
1. Fork the [SVGL repository](https://github.com/pheralb/svgl/tree/main?tab=readme-ov-file) and add your icons there.
2. Once merged, the updates will be published every Monday.
3. If needed, submit a pull request to this repository for additional modifications.

---

## 📜 License
This project is licensed under the **MIT License**.

### ⚠️ Disclaimer
Uhpenry Icons does not own any of the icons included in this package. All icons are the property of their respective owners. If you wish to have an icon removed, please first remove it from the [SVGL repository](https://github.com/pheralb/svgl/tree/main?tab=readme-ov-file), and the change will be reflected in the next update.

---

## 📞 Support
For any questions or issues, open an issue on GitHub or reach out via [Uhpenry](https://uhpenry.com).

---

🚀 **Happy Coding!**


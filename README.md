
# Skeumorphism Design System

A design system created by @shirishcreates that provides a collection of components with skeuomorphic styling, including buttons, cards, and more.

## 📘 Storybook

View the live Storybook here 👉 [Open Storybook](https://main--680feac0ccfd50d5cc4106bc.chromatic.com/?path=/story/components-button--primary&args=children:Download+Pdf)


## Installation

To get started, you need to install the package.

```bash
npm install @shirishcreates/skeumorphism-ds
```

## Usage

Once the library is installed, you need to import the styles and components in your project.

### Step 1: Import Styles

In your entry file (such as `index.js` or `App.js`), add the following import statement to include the necessary styles:

```javascript
import "@shirishcreates/skeumorphism-ds/styles.css";
```

### Step 2: Import Components

You can now import the components you need. For example, to use the `Button` component:

```javascript
import { Button } from "@shirishcreates/skeumorphism-ds";
```

### Step 3: Use the Components

You can now use the components in your JSX/TSX files. Here's an example of how to use the `Button` component:

```javascript
<Button variant="primary" onClick={() => { console.log('clicked') }}>
  Hello
</Button>
```

## Button Component

### Props:

- **`variant`** (`'primary' | 'default'`): The style of the button. Default is `'default'`.
- **`fullwidth`** (`boolean`): Set to `true` to make the button fill its container. Default is `false`.
- **`theme`** (`'light' | 'dark'`): The theme for the button. Default is `'light'`.
- **`disabled`** (`boolean`): Whether the button is disabled. Default is `false`.
- **`onClick`** (`function`): The click event handler function.

### Example:

```javascript
<Button variant="primary" fullwidth={true} onClick={() => console.log('clicked')}>
  Click Me
</Button>
```

## Contribution

Feel free to contribute to the library! If you have ideas for improvements or bug fixes, create an issue or submit a pull request.

## License

This library is open-source and released under the MIT License.


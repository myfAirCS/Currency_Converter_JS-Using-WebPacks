
# Web Development Environment Setup with Webpack

This project demonstrates setting up a web development environment with HTML, CSS, and JavaScript, including API integration for currency rates. The setup uses Webpack to manage and bundle the assets, incorporating TypeScript, CSS, and JavaScript with various configurations for linters and plugins.

## Features

- HTML, CSS, and JavaScript
- API integration for currency rates
- Webpack for module bundling and asset management
- TypeScript support
- CSS and JS linting
- Tailwind CSS
- Minification and optimization

## Setup and Configuration

### 1. Install Dependencies

```bash
npm install
```

### 2. Webpack Configuration

Webpack is configured with the following loaders and plugins:

- **Loaders:**
  - TypeScript Loader
  - PostCSS Loader
  - CSS Loader
  - Tailwind CSS Loader

- **Plugins:**
  - Webpack-Merger
  - ESLint Plugin
  - Terser Plugin
  - Mini CSS Extract Plugin
  - HtmlWebpack Plugin

### 3. Scripts

- **Build the project:**

  ```bash
  npm run build
  ```

- **Start the development server:**

  ```bash
  npm start
  ```

- **Lint the code:**

  ```bash
  npm run lint
  ```

## Project Structure

```
.
├── src
│   ├── codes.js
│   ├── images.png
│   ├── index.html
│   ├── index.js
│   ├── index.ts
│   └── style.css
├── .eslintrc.js
├── .gitignore
├── .stylelintrc.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── readme.md
├── tailwind.config.js
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js

```

## API Integration

The project includes API integration for fetching currency rates, demonstrating how to work with external APIs using JavaScript.

## Linters

### ESLint

Configured for JavaScript and TypeScript linting.

### Stylelint

Configured for CSS linting with the following rules:

- `color-no-invalid-hex`: Disallow invalid hex colors

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/myfAirCS/Currency_Converter_JS-Using-WebPacks
   ```

2. Navigate to the project directory and install the dependencies:

   ```bash
   cd your-repo-name
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Build the project for production:

   ```bash
   npm run build
   ```

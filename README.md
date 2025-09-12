# IEEE Workshop - React Setup Guide

This guide will walk you through setting up a React project using Vite and Tailwind CSS.

## Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Setup Steps

### 1. Create a new React project with Vite

```bash
npm create vite@latest my-app
```

### 2. Navigate to your project directory

```bash
cd my-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Tailwind CSS and its dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 5. Initialize Tailwind CSS configuration

```bash
npx tailwindcss init -p
```

### 6. Configure Tailwind CSS

Edit `tailwind.config.js` and replace its contents with:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 7. Add Tailwind directives to your CSS

Open `src/index.css` and replace its contents with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 9. Start the development server

```bash
npm run dev
```

## You're Ready to Go! 🚀

Your React application with Vite and Tailwind CSS is now ready for development. The development server will start and you can view your application in the browser.

## What's Next?

- Start building your components in the `src` directory
- Use Tailwind CSS classes for styling
- Enjoy the fast hot-reload provided by Vite

## Useful Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

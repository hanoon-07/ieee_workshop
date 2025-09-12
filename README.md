# IEEE Workshop 



## Prerequisites

Make sure you have Node.js (v18+) installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Setup Steps

### 1. Create a new React project with Vite

```bash
npm create vite@latest my-app
```

Choose "React" when prompted for the framework.

### 2. Navigate to your project directory

```bash
cd my-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Tailwind CSS v4

```bash
npm install tailwindcss @tailwindcss/vite
```

### 5. Configure Vite

Edit `vite.config.js` and add the Tailwind CSS plugin:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 6. Add Tailwind CSS to your stylesheet

Open `src/index.css` and replace its contents with:

```css
@import "tailwindcss";
```

**Note:** In Tailwind CSS v4, you no longer need the `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` directives. Just one simple import!

### 7. Start the development server

```bash
npm run dev
```

### 8. Test Tailwind CSS

Replace the content in `src/App.jsx` with:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 underline">
        Hello Tailwind CSS v4!
      </h1>
    </div>
  )
}

export default App
```





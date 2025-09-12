# ieee_workshop

## steps to get started with react

npm create vite@latest my-app\n
cd my-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

edit tailwind.config.js
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

Open src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


running
npm run dev





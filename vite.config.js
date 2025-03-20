// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/vectoproject/', 
//   "homepage": "./"
// });

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// export default defineConfig({
//   base: './', // Set relative base path for GitHub Pages
//   plugins: [],
// });


// export default defineConfig({
//   base: '/vectoproject/', // Match your repo name
//   })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/vectoproject/', // For GitHub Pages
  base: './',  // For Netlify
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',  // This is the key line for GitHub Pages deployment
  plugins: [react()],
});

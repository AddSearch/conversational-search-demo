import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: './', // This ensures assets are loaded relative to the HTML file
    plugins: [react()]
});

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillModulePreload: false,
  },
  root: './src/renderer', // Specify the root directory for your SolidJS app
});
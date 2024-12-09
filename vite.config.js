import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  server: {
    open: true,
  },
});

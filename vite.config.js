import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        contact: resolve(__dirname, 'contact.html'),
        manage: resolve(__dirname, 'manage.html'),
        bookmark: resolve(__dirname, 'bookmark.html'),
        insure: resolve(__dirname, 'insure.html'),
        fylo: resolve(__dirname, 'fylo.html'),
      },
    },
  },
});

//@ts-check
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/client',
  build: {
    outDir: resolve(__dirname, 'src/public'),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      // Proxy API requests to your Express backend
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
});
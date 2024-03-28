import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // ...
    optimizeDeps: {
      include: ['react-toastify'], // Ensure it's included in dependency optimization
    },
    build: {
      rollupOptions: {
        // You can configure Rollup options here if necessary
      },
    },
    // ...
  });
  
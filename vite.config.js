import { defineConfig } from 'vite';
import reactSWC from '@vitejs/plugin-react-swc';

// vite.config.js
export default {
  plugins: [reactSWC()],
  build: {
    outDir: 'dist', // Directorio de salida
  },
};

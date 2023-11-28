import { defineConfig } from 'vite';
import reactSWC from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSWC()],
  resolve: {
    alias: {
      // Ajusta la ruta según la ubicación de tu archivo JSON
      '@assets': 'src/assets',
    },
  },
});

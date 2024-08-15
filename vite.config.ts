import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Configura el servidor para escuchar en todas las interfaces
    port: 5172, // Configura el puerto si es necesario, puedes cambiarlo si prefieres otro
  },
});


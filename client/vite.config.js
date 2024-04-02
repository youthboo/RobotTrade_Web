import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT || 5188, 
    watch: {
      usePolling: true,
    },
  },
  define: {
    'import.meta.env': JSON.stringify(process.env),
  },
});
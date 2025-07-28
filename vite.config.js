import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    // Remove strictPort to allow Vite to use the next available port if 4000 is in use
    // strictPort: true, // Commented out to avoid failure on port conflict
    open: true, // Automatically open the browser to the correct port
  },
});


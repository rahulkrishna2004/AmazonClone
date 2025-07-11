import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,        // ✅ Enables describe/test without importing
    environment: 'jsdom', // ✅ Required for DOM-related testing (React)
    setupFiles: [],       // Optional: add setup files here if needed
  },
});

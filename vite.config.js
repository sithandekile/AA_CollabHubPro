import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://collabhub-c0vc.onrender.com', // The base URL of your backend API
        changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, ''), // Remove "/api" prefix when forwarding
      },
    },
  },
  
})

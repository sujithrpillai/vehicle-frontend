import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    watch: {
      usePolling: true, // Use polling for file changes, useful in Docker/Podman
    },
    port: 3000, // Default port for Vite
  },
})

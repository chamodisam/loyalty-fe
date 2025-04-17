import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',      // Make sure it's hosted on localhost
    port: 5175,             // Set the port to 5175
    open: true,             // Automatically open the browser when the dev server starts
  },
})

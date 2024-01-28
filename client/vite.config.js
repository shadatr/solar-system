import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth/google': {
        target: "https://solar-system-h7ph.onrender.com/",
      },'/api': {
        target: "https://solar-system-h7ph.onrender.com/",
      },
    },
  },
})

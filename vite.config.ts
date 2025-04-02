import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { cypressComponentPlugin } from 'cypress-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

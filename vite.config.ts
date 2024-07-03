import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  /**
   * refer https://vitejs.dev/guide/static-deploy.html to deploying to Github Pages
   */
  base: '/my-cv/'
})

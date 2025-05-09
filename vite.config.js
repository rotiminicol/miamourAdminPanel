import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  preview: {
    allowedHosts: ['miamouradminpanel.onrender.com']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

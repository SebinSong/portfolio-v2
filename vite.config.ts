import { defineConfig } from 'vite'
import { resolve, join } from 'path'
import react from '@vitejs/plugin-react'

const appSrc = resolve(__dirname, 'frontend/src')
const resolvePath = (relPath: string): string => join(appSrc, relPath)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'frontend',
  build: {
    outDir: resolve(__dirname, './dist'),
    assetsInlineLimit: 2048 // 2kb
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [ resolvePath('styles') ],
        additionalData: '@import "variables";'
      }
    }
  }
})

import { defineConfig, loadEnv } from 'vite'
import { resolve, join } from 'path'
import react from '@vitejs/plugin-react'

const appSrc = resolve(__dirname, 'frontend/src')
const resolvePath = (relPath: string): string => join(appSrc, relPath)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
    root: 'frontend',
    build: {
      outDir: resolve(__dirname, './dist'),
      assetsInlineLimit: 2048 // 2kb
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          loadPaths: [ resolvePath('styles') ],
          additionalData: '@import "variables";'
        }
      }
    },
    resolve: {
      alias: {
        '~': appSrc,
        '@components': resolvePath('components'),
        '@pages': resolvePath('pages')
      }
    },
    server: {
      // dev-server configuration
      proxy: {
        '/api': `http://127.0.0.1:${env.VITE_API_PORT}`
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
//   base: "/journal/",
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: '', // Relative directory for static assets in the build output
    minify: 'terser', // Minification strategy (terser or esbuild)
    sourcemap: false, // Generate source maps for production build
  },

  optimizeDeps: {
    include: ['react', 'react-dom'], // Dependencies to include in bundle optimization
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Open Sans'],
      },
    }),
  ],
  server: {
    host: true,
    strictPort: true,
    port: 8080,
  },
})

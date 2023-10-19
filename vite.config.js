import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import compression from "vite-plugin-compression";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), compression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/styles/variables.scss';
          @import '@/assets/styles/mixins.scss';
        `,
        javascriptEnabled: true
      }
    }
  }
})

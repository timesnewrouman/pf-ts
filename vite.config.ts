import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import svgLoader from 'vite-svg-loader';
import path from 'path';

export default defineConfig({
  server: {
    host: '127.0.0.1', // ради доступа сквозь впн
    hmr: {
      host: '127.0.0.1',
      protocol: 'ws'
    }
  },
  // base: '', // для dev
  base: '/pf-ts/', // для production
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json', '.sass'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    vuetify(),
    svgLoader(),
  ],
});

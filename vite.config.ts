import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    svgr(),
    react(),
    eslint(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: "Vite PWA React MUI",
        short_name: "Vite PWA",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        lang: 'en',
        scope: '/',
        description: "Vite PWA React MUI Boilerplate",
        theme_color: '#111111',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        dir: 'ltr',
        orientation: 'portrait',
        display_override: ['standalone', 'window-controls-overlay'],
        id: 'vite-pwa-react-mui.',
        shortcuts: [],
        screenshots: [],
        categories: ['productivity'],
        prefer_related_applications: false,
        protocol_handlers: [],
        file_handlers: [],
        related_applications: [],
        share_target: {
          action: '',
          params: {},
        },
        iarc_rating_id: '',
      },
    }),
  ],
});

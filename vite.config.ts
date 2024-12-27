import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // 예시로 별칭 사용 가능
    },
  },
  server: {
    proxy: {
      '/board/validate': {
        target: 'http://220.69.209.126:5012',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

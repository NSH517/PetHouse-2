import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← 이거 추가


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,  // ← 추가 (F5 새로고침 문제 해결)
    proxy: {
      '/login': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        bypass(req) {
          if (req.method === 'GET') return '/index.html'
        }
      },
      '/api/chat': 'http://localhost:3001',
      '/api': 'http://localhost:8080',
      '/logout': 'http://localhost:8080',
      '/uploads': 'http://localhost:8080',
      // '/img': 'http://localhost:8080',
      '/noticeup/': 'http://localhost:8080',
      '/noticedelete': 'http://localhost:8080',  
      // '/pet': 'http://localhost:8080',
      '/pet/reservation/insert': 'http://localhost:8080',  
      '/pet/introduce': 'http://localhost:8080',
       '/oauth2/authorization': 'http://localhost:8080',
    }
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio1/',  // تأكد من أن المسار يبدأ بـ "/"
  plugins: [react()],
})

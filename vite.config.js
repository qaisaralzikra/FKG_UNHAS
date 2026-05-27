import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx,css,scss,sass,less,styl}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Daftarkan font Poppins dengan fallback sans-serif bawaan browser
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  server: {
    proxy: {
      // Setiap request yang diawali '/api' akan diteruskan oleh Vite ke server UNHAS
      '/api': {
        target: 'https://dent.unhas.ac.id',
        changeOrigin: true,
        secure: false,
      }
    },
  },
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base relativo: funciona no GitHub Pages (/conecta-intercambio/) e localmente
export default defineConfig({
  base: './',
  plugins: [react()],
})

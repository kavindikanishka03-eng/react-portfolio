import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/', // අන්න මේ ලයින් එක අනිවාර්යයෙන්ම දාන්න!
})
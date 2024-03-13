import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {

  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}
  if (command !== 'serve') {
    config.base = '/Portfolio/'
  }

  return config
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Avoid transforming partially written files during formatting on Windows.
      awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 50 },
    },
  },
})

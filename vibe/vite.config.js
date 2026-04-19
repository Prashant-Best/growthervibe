import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})

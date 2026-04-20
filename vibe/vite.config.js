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
        demandGeneration: resolve(__dirname, 'demand-generation.html'),
        contentMarketing: resolve(__dirname, 'content-marketing.html'),
        marketingAutomation: resolve(__dirname, 'marketing-automation.html'),
        seo: resolve(__dirname, 'seo.html'),
        saasPpcAgency: resolve(__dirname, 'saas-ppc-agency.html'),
        accountBasedMarketing: resolve(__dirname, 'account-based-marketing.html'),
        aiSeo: resolve(__dirname, 'ai-seo.html'),
        geo: resolve(__dirname, 'geo.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        contact: resolve(__dirname, 'contact.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
})

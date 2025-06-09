import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // Node event listeners
    },
  },
  projectId: '3y24z6',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: 'cypress/support/component.ts',
  },
});

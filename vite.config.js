import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@babel/runtime': '/node_modules/@babel/runtime',
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: mode === "production" ? { "@babel/runtime": require.resolve("/node_modules/@babel/runtime") } : {},
  },
}));

// import { defineConfig } from 'vite';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@babel/runtime': '/node_modules/@babel/runtime',
//     },
//   },
// });

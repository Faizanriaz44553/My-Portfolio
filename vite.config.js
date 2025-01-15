import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: mode === "production" ? { "@babel/runtime": require.resolve("@babel/runtime") } : {},
  },
}));
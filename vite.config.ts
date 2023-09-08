import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      shared: path.resolve(__dirname, './src/shared'),
      entities: path.resolve(__dirname, './src/entities'),
      features: path.resolve(__dirname, './src/features'),
      widgets: path.resolve(__dirname, './src/widgets'),
      pages: path.resolve(__dirname, './src/pages'),
      store: path.resolve(__dirname, './src/store'),
      app: path.resolve(__dirname, './src/app'),
    }
  },
  plugins: [
    react(),
  ],
});

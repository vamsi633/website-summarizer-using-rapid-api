import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import url from "path-browserify";
import path from "path-browserify";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      url: "path-browserify",
      path: "path-browserify",
      "source-map-js":"path-browserify",
      fs:"path-browserify"
    },
  },
})

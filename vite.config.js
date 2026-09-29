import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Vendor code changes far less often than app code, so splitting it
        // keeps it cached across deploys.
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          gsap: ["gsap", "gsap/ScrollTrigger", "@gsap/react"],
        },
      },
    },
  },
});

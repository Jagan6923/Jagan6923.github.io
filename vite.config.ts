import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "Jagan6923.github.io", 
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});

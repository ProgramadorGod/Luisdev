import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',  // Especifica que la salida de la construcción debe ser la carpeta 'docs'
  },
  server: {
    host: true,
    port: 3000, // Use the value of 'FRONTEND_SERVER_PORT'
  },
});

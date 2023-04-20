import * as path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

type Config = {
  mode: string;
};

export default ({ mode }: Config) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      strictPort: true,
      port: 3000,
      watch: {
        usePolling: true,
      },
      proxy: {
        "/api": {
          target: process.env.VITE_CRYPTOWATCH_API_HOST,
          changeOrigin: true,
          rewrite: (pathStr) => pathStr.replace(/^\/api/, ""),
        },
      },
    },
  });
};

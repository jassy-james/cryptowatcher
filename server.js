import * as path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import express from "express";

import { createProxyMiddleware } from "http-proxy-middleware";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use("/assets", express.static(path.join(dirname, "dist/assets")));

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.cryptowatch.ch",
    changeOrigin: true,
    pathRewrite: { "/^/api/": "/" },
  }),
);

app.get("/", (req, res) => {
  res.sendFile("/dist/index.html", { root: dirname });
});

app.listen(80);

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://svenko.me",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});

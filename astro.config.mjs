import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sven.foo",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});

// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
  site: 'https://vf7.ssl.casa',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['mqtt']
    }
  },
  adapter: cloudflare({
    imageService: "compile",
    sessionKVBindingName: "VFDashboard",
  }),
});

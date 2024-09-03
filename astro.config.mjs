import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: 'static',
  adapter: vercel(),
});

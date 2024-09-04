import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()],
  output: 'server',
  adapter: netlify(),
});
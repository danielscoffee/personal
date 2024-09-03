import { defineConfig } from 'astro/config';
import icon from "astro-icon";

<<<<<<< HEAD
import vercel from "@astrojs/vercel";
=======
import vercel from "@astrojs/vercel/static";
>>>>>>> parent of 8ecd955 (SSR set up)

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
<<<<<<< HEAD
  output: 'hybrid',
=======
  output: 'static',
>>>>>>> parent of 8ecd955 (SSR set up)
  adapter: vercel(),
});

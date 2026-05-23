// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://guardianwarriors.org',
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/compile'
    }
  }
});

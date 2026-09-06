// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://josefrnandezz.github.io',
  // Astro 7 defaults to 'jsx' whitespace stripping; keep classic behaviour so
  // inline spacing in the markup is predictable.
  compressHTML: true,
  // The test-suite builds against fixture posts with its own cache so the
  // content-layer store never leaks fixtures into a real build.
  cacheDir: process.env.ASTRO_CACHE_DIR ?? './node_modules/.astro',
});

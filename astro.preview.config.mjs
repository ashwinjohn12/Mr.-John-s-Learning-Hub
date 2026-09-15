import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://raw.githack.com',
  base: '/ashwinjohn12/Mr.-John-s-Learning-Hub/futuretech-preview-20260915/preview-site/',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  }
});

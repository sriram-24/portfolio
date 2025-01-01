// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	output:'static',
	site: 'https://sriram-24.github.io',
	integrations: [react(), tailwind({
		applyBaseStyles : false
  	})]
});
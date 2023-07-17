import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		setupFiles: ['./vitest.setup.ts'],
		environment: 'jsdom'
	}
});

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svelte', '.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/lapennaparlante' : '',
        }
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;

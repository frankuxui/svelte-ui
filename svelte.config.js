import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		blog: path.resolve(__dirname, './src/layouts/mdsvex.svelte')
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['vitesse-dark'],
				langs: ['javascript', 'typescript'],
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'vitesse-dark' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter(),
		alias: {
			'components': 'src/components',
			'lib': 'src/lib',
			'layouts': 'src/layouts',
			'content': 'src/content',
		},
	}
};

export default config;

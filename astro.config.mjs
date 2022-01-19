// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import astroRemark from '@astrojs/markdown-remark'

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable the Svelte renderer to support Svelte components.
	renderers: ['@astrojs/renderer-svelte'],
	markdownOptions: {
		render: [
			astroRemark,
			{
				remarkPlugins: ['remark-code-titles'],
				rehypePlugins: [
					['rehype-autolink-headings', { behavior: 'prepend' }],
					// ['rehype-toc', { headings: ['h2', 'h3'] }],
					[new URL('./add-classes.mjs', import.meta.url).pathname, { 'h1,h2,h3': 'title' }],
					'rehype-slug'
				]
			}
		]
	}
})

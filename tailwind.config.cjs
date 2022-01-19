module.exports = {
	content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#101214',
				'primary-brand': '#987760'
			},
			container: {
				center: true
			},
			fontFamily: {
				syne: ['Syne', 'sans-serif']
			}
		}
	}
}

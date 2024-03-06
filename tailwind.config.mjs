/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'night': '#1a1f26',
				'main': '#ffffff',
				'gray-150': '#30353b',
				'gray-secondary': '#999999',
				'mega-red': '#ce3f2d',
				'gray-primary': '#E5E5E5'
			},
			fontFamily: {
				'poppins': ['Poppins', 'arial', 'sans-serif'],
				'inter' : ['Inter', 'arial', 'sans-serif']
			}
		},
	},
	plugins: [],
}

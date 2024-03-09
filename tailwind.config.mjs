/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'night': 'var(--bg-color)',
				'main': 'var(--color-main)',
				'gray-border': 'var(--color-gray-border)',
				'gray-primary': 'var(--color-gray-primary)',
				'gray-secondary': 'var(--color-gray-secondary)',
				'mega-red': 'var(--color-mega-red)',
				'bg-2': "var(--bg-color-2)",
				'banner': "var(--bg-banner)",
				'counter': "var(--color-counter)"
			},
			fontFamily: {
				'poppins': ['Poppins', 'arial', 'sans-serif'],
				'inter' : ['Inter', 'arial', 'sans-serif']
			}
		},
	},
	plugins: [],
	darkMode: "class",
}

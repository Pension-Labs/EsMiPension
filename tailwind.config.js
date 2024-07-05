/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primario: '#05a146',
				secundario: '#70f5b7',
				acento: '#1f1f1f',
				error: '#ffa8a8',
				error_acento: '#ff2b2b',
			},
		},
	},
	plugins: [],
}

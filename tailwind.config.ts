import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			borderColor: {
				de3500: 'green',
			},

			colors: {
				primary: '#55F5BB',
				'primary-with-opacity': '#55F5BB66',
				secondary: '#00072D',
				third: '#FF4A1C',
			},
		},
	},
	plugins: [],
};
export default config;

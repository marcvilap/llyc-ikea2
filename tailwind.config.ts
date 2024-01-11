import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
	future: {
		disableColorOpacityUtilitiesByDefault: true,
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '28rem',
			md: '48rem',
			lg: '64rem',
			xl: '80rem',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
			},
		},
		extend: {
			fontFamily: {
				sans: "'Noto IKEA Latin', sans-serif",
				display: "'Covered By Your Grace', sans-serif",
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.rotate-y-180': {
					transform: 'rotateY(180deg)',
				},
				'.preserve-3d': {
					transformStyle: 'preserve-3d',
				},
				'.perspective': {
					perspective: '1000px',
				},
				'.backface-hidden': {
					backfaceVisibility: 'hidden',
				},
			})
		}),
	],
} satisfies Config

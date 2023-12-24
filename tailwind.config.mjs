import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'-lg': { max: '1023.5px' },
				'1.5xl': { min: '1400px' },
				'3xl': { min: '1920.5px' },
				'4xl': { min: '2560px' },
				// tablet
				mdTall: { raw: '(min-height: 1024px) and (min-width: 768px) and (max-width: 1023.5px)' },
				mdtaller: { raw: '(min-height: 1050px) and (min-width: 768px) and (max-width: 1023.5px)' },
				mdTallest: { raw: '(min-height: 1225px) and (min-width: 768px) and (max-width: 1023px)' },
				mdMaxTall: { raw: '(min-height: 1350px) and (min-width: 768px) and (max-width: 1023px)' },
				// desktop
				lgMaxHeight: { raw: '(max-height: 899.5px) and (min-width: 1024px)' },
				lgMinHeight: { raw: '(min-height: 905px) and (min-width: 1024px)' }
			},
			fontFamily: {
				serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
				sans: ['Barlow Condensed', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'primary-black': '#0B0D17',
				'primary-light-blue': '#D0D6F9',
				'primary-white': '#FFFFFF'
			},
			fontSize: {
				h1: '9.375rem',
				h1Sm: '5rem',
				h2: '6.25rem',
				h2Sm: '3.5rem',
				h2Md: '5rem',
				h3: '3.5rem',
				h3Sm: '1.5rem',
				h3Md: '2.5rem',
				h4: '2rem',
				h4Md: '1.5rem',
				h4Sm: '1rem',
				h5: '1.75rem',
				h5Sm: '1rem',
				h5Md: '1.25rem',
				p: '1.125rem',
				pSm: '0.938rem',
				pMd: '1rem'
			},
			gridTemplateRows: {
				crew: 'auto 1fr'
			}
		},
		fontFamily: {
			body: ['Barlow', 'sans-serif']
		}
	},
	plugins: []
};

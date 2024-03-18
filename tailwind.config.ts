import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { integra } from './src/integra'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		screens: {
		  'sm': '576px',
		  'md': '960px',
		  'lg': '1440px',
		},
	  },
	plugins: [
		typography,
		skeleton({
			themes: {
				custom: [
					integra,
				],
			},
		}),
	],
} satisfies Config;

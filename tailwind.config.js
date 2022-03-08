export default {
	plugins: [],
	theme: {
		extend: {
			colors: {
				// lightbrown: '#695752',
				// grey: '#696969',
				// brown: '#62514C'
				// lightGrey: '#FAFAFA',
				lightGrey: '#FAF1ED',
				pink: '#E8C1B5',
				brown: '#785A4D',
				darkBlue: '#313C3E',
				sand: '#CCBAA2',
				grey: '#A8A195',
				lightPink: '#E3DBD5'
			}
		}
	},
	purge: ['./index.html', './src/**/*.{svelte,js}'], // for unused CSS
	variants: {
		extend: {}
	},
	darkMode: 'media'
};

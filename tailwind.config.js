module.exports = {
	purge: [
		'./src/components/**/*.{js,jsx}',
		'./pages/**/*.{js,jsx}'],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}

module.exports = {
	purge: [
		'./src/components/**/*.{js,jsx}',
		'./pages/**/*.{js,jsx}'],
	theme: {
		container: {
		 center: true,
		 padding: "2rem",
		 screen: {
			"2xl": "1400px",
		 },

		},
		fontFamily: {
			cabin: ['Cabin','sans-serif'],
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
				  DEFAULT: "hsl(var(--primary))",
				  foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
				  DEFAULT: "hsl(var(--secondary))",
				  foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
				  DEFAULT: "hsl(var(--destructive))",
				  foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
				  DEFAULT: "hsl(var(--muted))",
				  foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
				  DEFAULT: "hsl(var(--accent))",
				  foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
				  DEFAULT: "hsl(var(--popover))",
				  foreground: "hsl(var(--popover-foreground))",
				},
				card: {
				  DEFAULT: "hsl(var(--card))",
				  foreground: "hsl(var(--card-foreground))",
				},
			  },
			  borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			  },
			  maxHeight: {
				'860': '860px',
				'660': '660px',
				'200' : '200px',
			  },
			  maxWidth: {
				'900': '900px',
			  }
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		//require('@tailwindcss/forms'),
		require( 'autoprefixer' )
	]
}

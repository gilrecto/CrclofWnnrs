/** @type {import('tailwindcss').Config} */

let plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./**/*.liquid', './frontend/**/*.{js,ts,jsx,tsx}'],
  safelist: [],
  theme: {
		extend: {
			fontFamily: {
				vincent: ["Vincent", "sans-serif"]
			},
			fontSize: {
				clamp_xxl: "clamp(4.5rem, 8vw, 7.5rem)",
				clamp_xl: "clamp(3.5rem, 5vw, 6rem)",
        clamp_l: "clamp(3rem, 4vw, 4.5rem)",
        size_md: "2.5rem",
        size_sm: "1.3rem",
        size_xs: "11rem",
      },
		},
		colors: {
			transparent: 'transparent',
			light_brown: "#EBE9E3",
			accent: "#005514"
		},
		screens: {
			'xs': '0',
			'sm': '576px',
			'sm-mobile': {
				'max': '767px'
			},
			'md': '768px',
			'mobile': {
				'max': '991px'
			},
			'lg': '992px',
			'xl': '1200px',
			'xxl': '1441px',
		}
	},
	plugins: [],
};
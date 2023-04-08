const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				palettePrimary: "#201E1E",
				paletteSecondary: "#615A56",
				paletteTertiary: "#ABA59C",
				paletteQuaternary: "#FFFFFF",
				paletteRed: "#B3001B",
				paletteGreen: "#0B6E4F",
				paletteBlue: "#2541B2",
			},
			fontFamily: {
				sans: ["var(--font-lexend)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};

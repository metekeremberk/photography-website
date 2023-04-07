const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				palettePrimary: "#252323",
				paletteSecondary: "#8A817C",
				paletteTertiary: "#BCB8B1",
				paletteQuaternary: "#F4F3EE",
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

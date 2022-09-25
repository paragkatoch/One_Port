import { themes } from "./data";
import { theme } from "./types";

const lightTheme = [
	["primary-color", "#171717"],
	["secondary-color", "#ededed"],
	["tertiary-color", "#fafafa"],
	["quaternary-color", "#f1f1f1"],
	["quinary-color", "#c7c7c756"],
	["shadow-color", "rgba(23, 23, 23, 0.08)"],
];

const darkTheme = [
	["primary-color", "#d7d7d7"],
	["secondary-color", "#1f1f1f"],
	["tertiary-color", "#101010"],
	["quaternary-color", "#1b1c20"],
	["quinary-color", "#57575756"],
	["shadow-color", "rgba(16, 16, 16, 0.88)"],
];

const colors = [["i-gray-color", "#acacac"]];

/**
 * return color variables string
 */
export function getColors(theme: theme) {
	let themeColors: string[][] = new Array<string[]>();

	if (theme === themes.light) {
		themeColors = lightTheme;
	} else if (theme === themes.dark) {
		themeColors = darkTheme;
	}

	return themeColors
		.concat(colors)
		.map((item) => `--${item[0]}: ${item[1]};`)
		.join("");
}

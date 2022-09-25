import { viewport } from "./types";

export const themes = {
	light: "light",
	dark: "dark",
} as const;

export const blocks = {
	intro: "intro",
	social: "social",
	image: "image",
	theme: "theme",
	text: "text",
} as const;

export const socialHandles = {
	behance: "behance",
	dribbble: "dribbble",
	facebook: "facebook",
	github: "github",
	gumroad: "gumroad",
	IMDb: "IMDb",
	instagram: "instagram",
	linkedin: "linkedin",
	medium: "medium",
	pinterest: "pinterest",
	reddit: "reddit",
	snapchat: "snapchat",
	spotify: "spotify",
	tiktok: "tiktok",
	twitch: "twitch",
	twitter: "twitter",
	youtube: "youtube",
} as const;

export const shapes = {
	square: "square",
	vertical_R: "vertical_R",
	horizontal_R: "horizontal_R",
} as const;

// shapename : [width, height]
export const shapeValue = {
	square: [1, 1],
	vertical_R: [1, 2],
	horizontal_R: [2, 1],
} as const;

export const viewportData = {
	mobile: { columns: 2, range: { start: 0, end: 833 } },
	tablet: { columns: 3, range: { start: 834, end: 1279 } },
	desktopSmall: { columns: 4, range: { start: 1280, end: 10000 } },
} as const;

export function getColumns(viewport: viewport) {
	return viewportData[viewport].columns;
}

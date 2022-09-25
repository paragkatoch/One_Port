import { theme } from "../utils/types";

export default class LocalStorage {
	static localColorSchemeVar = "color-scheme";
	static setLocally: boolean;

	constructor(setLocally: boolean) {
		LocalStorage.setLocally = setLocally;
	}

	get colorScheme(): theme {
		const localTheme = JSON.parse(
			window.localStorage.getItem(LocalStorage.localColorSchemeVar) || "{}"
		) as { [key: string]: theme };

		return LocalStorage.setLocally
			? localTheme[LocalStorage.localColorSchemeVar]
			: "";
	}

	set colorScheme(colorScheme: theme) {
		LocalStorage.setLocally &&
			window.localStorage.setItem(
				LocalStorage.localColorSchemeVar,
				colorScheme
			);
	}
}

import React, { createContext, useContext } from "react";
import useColorTheme from "../hooks/useColorTheme";
import { themes } from "../utils/data";
import { theme } from "../utils/types";

const ThemeContext = createContext<[theme, () => void]>(["", () => {}]);

export const useTheme = (): [theme, () => void] => {
	return useContext(ThemeContext);
};

export default function ThemeProvider({
	children,
	theme = themes.light,
}: {
	children: React.ReactNode;
	theme?: theme;
}) {
	const [colorScheme, toggleColorScheme] = useColorTheme(theme, changeTheme);

	return (
		<ThemeContext.Provider value={[colorScheme, toggleColorScheme]}>
			{children}
		</ThemeContext.Provider>
	);
}

const changeTheme = (theme: string) => {
	theme === themes.dark
		? document.body.classList.add(themes.dark)
		: document.body.classList.remove(themes.dark);
};

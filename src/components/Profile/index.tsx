import { ReactNode, useEffect, useState } from "react";
import { useViewport } from "./hooks/useViewport";
import ThemeProvider from "./contexts/ThemeContext";
import NavBar from "./components/PublicProfile-ui/Nav";
import BlockContainer from "./components/PublicProfile-ui/BlockContainer";

import styles from "src/components/Profile/styles/profile.module.scss";
import { getColumns, themes } from "./utils/data";
import { getColors } from "./utils/theme";
import { BlockData, theme } from "./utils/types";

interface PropTypes {
	categories: string[];
	blocksData: BlockData[];
	theme: theme;
	children: ReactNode;
}

export default function Profile({
	categories,
	blocksData,
	theme,
	children,
}: PropTypes) {
	const [currentCategory, setCurrentCategory] = useState<string>(categories[0]);

	useEffect(() => {
		document.body.classList.add("profile");
		return () => {
			document.body.classList.remove("profile");
		};
	}, []);

	// number of columns to show
	const columns = getColumns(useViewport());

	return (
		<ThemeProvider theme={theme}>
			<style global jsx>
				{bodyStyles}
			</style>

			<div className={styles.style}>
				<div className={styles.app}>
					{children}

					<main className={styles.app_container}>
						<NavBar {...{ categories, currentCategory, setCurrentCategory }} />
						<BlockContainer
							{...{ columns, categories, currentCategory, blocksData }}
						/>
					</main>
				</div>
			</div>
		</ThemeProvider>
	);
}

const bodyStyles = `
	body.profile {
		${getColors(themes.light)};
		--transition-time: 0.4s;
		--transition-drop-shadow-time: var(--transition-time);
		user-select: none;
		background-color: var(--quaternary-color);
	}

	body.profile.dark{
		${getColors(themes.dark)};
	}
	body.profile.dark .theme_img {
		filter: brightness(0.88) contrast(1.2);
	}
`;

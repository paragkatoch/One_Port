import { motion } from "framer-motion";
import styles from "./styles.module.scss";

import Sun from "./assets/sun.svg";
import Moon from "./assets/moon.svg";
import { useState } from "react";
import { useTheme } from "src/components/Profile/contexts/ThemeContext";
import { themes } from "src/components/Profile/utils/data";
import { ThemeBlockType } from "src/components/Profile/utils/types";

export default function ThemeBlock({
	blockData,
	style,
}: {
	blockData: ThemeBlockType;
	style: string;
}) {
	console.log(blockData);
	const [colorScheme, toggleColorScheme] = useTheme();
	const [change, setChange] = useState(colorScheme !== themes.light);

	function toggleChange() {
		setChange((prev) => !prev);
	}

	function OnClickHandler() {
		toggleChange();
		toggleColorScheme();
	}

	return (
		<motion.div
			layout
			key={blockData.id}
			className={[style, styles.block_container].join(" ")}
		>
			<main
				className={[styles.button_container, change ? styles.change : ""].join(
					" "
				)}
				onClick={OnClickHandler}
			>
				<span className={styles.icon_container}>
					{colorScheme !== themes.light ? <Sun /> : <Moon />}
				</span>
			</main>
		</motion.div>
	);
}

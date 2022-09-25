import { MouseEvent, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface PropTypes {
	categories: string[];
	currentCategory: string;
	setCurrentCategory: (name: string) => void;
}

/**
 * Cateogory navbar Component
 *
 * @param categories list of all categories
 * @param currentCategory category getter
 * @param settCurrentCategory category setter
 */
export default function NavBar({
	categories,
	currentCategory,
	setCurrentCategory,
}: PropTypes) {
	const followRef = useRef<HTMLButtonElement>(null);
	const activeRef = useRef<HTMLButtonElement>(null);

	const handleCategoryChange = (event: MouseEvent<HTMLElement>) => {
		const element = event.target as HTMLElement;
		const categoryName = element.innerText;

		if (categoryName !== currentCategory) {
			window.scrollTo(0, 0);
			setCurrentCategory(categoryName);

			// vibrate on category change
			if (window?.navigator?.vibrate) {
				window.navigator.vibrate([24]);
			}
		}
	};

	// set intital position of background span
	useEffect(() => {
		if (activeRef.current && followRef.current) {
			const left = activeRef.current.offsetLeft;
			const right = activeRef.current.offsetWidth;

			followRef.current.style.left = `${left - 16}px`;
			followRef.current.style.width = `${right + 32}px`;
		}
	}, [currentCategory]);

	return (
		<nav id="navbar" className={styles.navbar}>
			<div className={styles.container}>
				{categories.map((item, i) => (
					<button
						key={i}
						className={currentCategory === item ? styles.active : ""}
						ref={currentCategory === item ? activeRef : undefined}
						onClick={handleCategoryChange}
					>
						{item}
					</button>
				))}
			</div>
			<span className={styles.follower} ref={followRef}></span>
		</nav>
	);
}

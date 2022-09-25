import { useEffect, useState } from "react";
import { stackArray } from "src/components/Profile/lib/stack";
import { ActiveInactiveList, BlockData } from "src/utils/types";
import Block from "../Blocks";
import styles from "./styles.module.scss";

interface PropTypes {
	currentCategory: string;
	columns: number;
	blocksData: BlockData[];
	categories: string[];
}

/**
 * Wrapper Component to the block in Public Profile
 *
 * @param currentCategory current category of the blocks to show
 * @param categories list of all categories available
 * @param columns number of columns to show
 * @param blocksData blocks data to be shown
 */
export default function BlockContainer({
	currentCategory = "",
	columns = 4,
	blocksData = [],
	categories,
}: PropTypes) {
	const [activeInactiveList, setActiveInactiveList] = useState<
		ActiveInactiveList[]
	>([]);

	useEffect(() => {
		const { activeBlocks, inactiveBlocks } = filterBlocks(
			blocksData,
			currentCategory,
			categories
		);

		setActiveInactiveList([
			...stackArray(activeBlocks, columns),
			...stackArray(inactiveBlocks, columns),
		]);
	}, [blocksData, categories, columns, currentCategory]);

	return (
		<div className={styles.block_container}>
			{/* {createBlocks(activeInactiveList)} */}
			{activeInactiveList.map(({ active = false, ...item }) => (
				<Block key={item.id} blockData={item} active={active} />
			))}
		</div>
	);
}

/**
 * Function to separate active and inactive blocks
 *
 * @param {Array[Object]} blockList list of blocks data
 * @param {String} currentCategory
 * @param {Array[String]} categories
 * @return Object containing activeBlocks and inactiveBlocks
 */
function filterBlocks(
	blockList: BlockData[],
	currentCategory: string,
	categories: string[]
) {
	let activeBlocks: ActiveInactiveList[] = [];
	const inactiveBlocks: ActiveInactiveList[] = [];

	if (currentCategory === categories[0]) {
		activeBlocks = blockList.map((item) => ({ ...item, active: true }));
	} else {
		blockList.forEach((item) => {
			if (item?.categories?.includes(currentCategory))
				activeBlocks.push({ ...item, active: true });
			else inactiveBlocks.push({ ...item, active: false });
		});
	}

	return { activeBlocks, inactiveBlocks };
}

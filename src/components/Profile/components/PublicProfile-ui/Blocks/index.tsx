import ImageBlock from "./ImageBlock";
import IntroBlock from "./IntroBlock";
import SocialBlock from "./SocialBlock";
import TextBlock from "./TextBlock";
import ThemeBlock from "./ThemeBlock";
import shapeStyles from "./styles/shape.module.scss";
import blockStyles from "./styles/block.module.scss";
import React from "react";
import { BlockData } from "src/utils/types";
import { blocks } from "src/utils/data";

/**
 * Higher order component to return block based on blocktype
 * @param blockData block data
 * @param active block active or not
 * @returns Block Component
 */
export default function Block({
	blockData,
	active = false,
}: {
	blockData: BlockData;
	active: boolean;
}) {
	const style = [
		shapeStyles[blockData?.shape],
		blockStyles.block,
		!active ? blockStyles.inactive : "",
	].join(" ");

	switch (blockData.blockType) {
		case blocks.image:
			return <ImageBlock {...{ style, blockData }} />;
		case blocks.social:
			return <SocialBlock {...{ style, blockData }} />;
		case blocks.text:
			return <TextBlock {...{ style, blockData }} />;
		case blocks.intro:
			return <IntroBlock {...{ style, blockData }} />;
		case blocks.theme:
			return <ThemeBlock {...{ style, blockData }} />;
		default:
			return <></>;
	}
}

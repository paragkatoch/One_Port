import { blocks, shapes, socialHandles, themes, viewportData } from "./data";

export type theme = typeof themes[keyof typeof themes] | "";
export type block = typeof blocks[keyof typeof blocks];
export type shape = typeof shapes[keyof typeof shapes];
export type socialHandle = typeof socialHandles[keyof typeof socialHandles];
export type viewport = keyof typeof viewportData;

// block data types
interface genericBlockType {
	id: string;
	_key: string;
	categories: string[];
	shape: shape;
	name: string;
}

export type ThemeBlockType = genericBlockType & {
	blockType: "theme";
};
export type IntroBlockType = genericBlockType & {
	blockType: "intro";
	description: string;
	image: string;
};
export type SocialBlockType = genericBlockType & {
	blockType: "social";
	socialType: socialHandle;
	url: string;
};
export type ImageBlockType = genericBlockType & {
	blockType: "image";
	buttonText: string;
	image: string;
	url: string;
};
export type TextBlockType = genericBlockType & {
	blockType: "text";
	heading: string;
	description: string;
	url: string;
	buttonText: string;
};

export type BlockData =
	| TextBlockType
	| SocialBlockType
	| ImageBlockType
	| ThemeBlockType
	| IntroBlockType;

export type ActiveInactiveList = BlockData & {
	active: boolean;
};

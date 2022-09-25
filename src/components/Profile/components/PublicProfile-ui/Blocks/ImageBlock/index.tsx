import { motion } from "framer-motion";

import LinkButton from "../Buttons/LinkButton";
import styles from "./styles.module.scss";
import fallbackImage from "src/components/Profile/assets/images/osenorth.png";
import CustomImage from "src/components/CustomImage";
import { ImageBlockType } from "src/utils/types";

export default function ImageBlock({
	blockData,
	style,
}: {
	blockData: ImageBlockType;
	style: string;
}) {
	return (
		<motion.div
			layout
			key={blockData.id}
			className={[style, styles.block_container].join(" ")}
		>
			<CustomImage
				src={blockData?.image ?? fallbackImage}
				alt={blockData?.buttonText ?? ""}
				style={`${styles.block_image} theme_img`}
				layout="fill"
				objectFit="cover"
				draggable="false"
			/>

			<LinkButton
				{...{
					style: styles.buttonPos,
					url: blockData?.url,
					text: blockData?.buttonText,
				}}
			/>
		</motion.div>
	);
}

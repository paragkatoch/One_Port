import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import LinkButton from "../Buttons/LinkButton";
import { TextBlockType } from "src/components/Profile/utils/types";

export default function TextBlock({
	blockData,
	style,
}: {
	blockData: TextBlockType;
	style: string;
}) {
	return (
		<motion.div
			layout
			key={blockData.id}
			className={[style, styles.block_container].join(" ")}
		>
			<h2 className={styles.blockHeading}>{blockData?.heading}</h2>
			<p className={styles.blockDescription}>{blockData?.description}</p>

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

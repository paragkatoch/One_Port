import { motion } from "framer-motion";
import UserImage from "src/components/Profile/assets/icons/user.png";
import CustomImage from "src/components/CustomImage";
import { IntroBlockType } from "src/utils/types";

import styles from "./styles.module.scss";

export default function IntroBlock({
	blockData,
	style,
}: {
	blockData: IntroBlockType;
	style: string;
}) {
	return (
		<motion.div
			layout
			key={blockData.id}
			className={[style, styles.block_container].join(" ")}
		>
			<CustomImage
				src={blockData.image ?? UserImage}
				layout="fill"
				objectFit="cover"
				alt="user"
				style={styles.userImage}
				draggable="false"
			/>

			<p
				className={styles.userDescription}
				dangerouslySetInnerHTML={{ __html: blockData?.description }}
			></p>
		</motion.div>
	);
}

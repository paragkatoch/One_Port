import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import LinkButton from "../Buttons/LinkButton";
import { SocialBlockType } from "src/utils/types";
import SocialIcon from "src/components/SocialIcon";

export default function SocialBlock({
	blockData,
	style,
}: {
	blockData: SocialBlockType;
	style: string;
}) {
	return (
		<motion.div
			layout
			key={blockData.id}
			className={[style, styles.block_container].join(" ")}
		>
			<SocialIcon type={blockData?.socialType} />

			<LinkButton
				{...{
					style: styles.buttonPos,
					url: blockData?.url,
					text: blockData?.socialType,
				}}
			/>
		</motion.div>
	);
}

/*
 / Social Block

    {
        blockType: "social",

    /  shape: "square",

        socialMedia: "" - Instagram,Twitter,Twitch,Github etc
        handle: "" - social media handle/ username / slug
    },
    {
        blockType: "social",

    / shape: "square",

        socialMedia: "other",
        buttonName: "url name/text of social media platform",
        url: "" - his/her social media url,
    },
*/

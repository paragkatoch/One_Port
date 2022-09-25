import Link from "next/link";
import { useRouter } from "next/router";

import ButtonStyles from "../button.module.scss";
import BlockStyles from "../../styles/block.module.scss";
import ArrowIcon from "src/components/Profile/assets/icons/arrow-up-right.svg";

export default function LinkButton({ style = "", url = "", text = "" }) {
	const router = useRouter();

	return url !== "" ? (
		<Link href={url ?? router.pathname}>
			<a
				className={[
					ButtonStyles.block_button,
					BlockStyles.block_button,
					style,
				].join(" ")}
				target="_blank"
			>
				<span className={ButtonStyles.arrowIcon}>
					<ArrowIcon />
				</span>

				{text && <p>{text}</p>}
			</a>
		</Link>
	) : text !== "" ? (
		<span
			className={[
				ButtonStyles.block_button,
				BlockStyles.block_button,
				style,
			].join(" ")}
		>
			<span className={ButtonStyles.arrowIcon}>
				<ArrowIcon />
			</span>
			<p>{text}</p>
		</span>
	) : (
		<></>
	);
}

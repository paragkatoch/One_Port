import ButtonStyles from "../button.module.scss";
import BlockStyles from "../../styles/block.module.scss";
import ArrowIcon from "src/components/Profile/assets/icons/arrow-up-right.svg";

export default function ActionButton({
	style = "",
	action = () => {},
	text = "",
}) {
	return (
		<button
			className={[
				ButtonStyles.block_button,
				BlockStyles.block_button,
				style,
			].join(" ")}
			onClick={action}
		>
			<span className={ButtonStyles.arrowIcon}>
				<ArrowIcon />
			</span>
			<p>{text}</p>
		</button>
	);
}

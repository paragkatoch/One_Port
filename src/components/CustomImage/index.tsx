import Image, { ImageProps } from "next/image";

type StyleType = {
	style: string;
};

/**
 * Wrapper Component for Next.js Image Component
 * @param {String} style styles for wrapper of image component
 * @param {ImageProps} image_component_props props for the nextjs image component
 */
export default function CustomImage({
	style = "",
	src = "",
	alt = "",
	...imageProperties
}: ImageProps & StyleType) {
	// src and alt destructed to prevent eslint warning
	return (
		<div className={style}>
			<Image src={src} alt={alt} {...imageProperties} />
		</div>
	);
}

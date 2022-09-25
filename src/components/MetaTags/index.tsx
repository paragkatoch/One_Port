import {
	appDescription,
	appName,
	appPreviewImage,
	appType,
	appURL,
} from "src/utils/appData";

/**
 * Component to add important meta tags
 * @param title title of the page
 * @param description description of the page
 * @param url url of the page
 * @param type type of the page
 * @param image url of the link preview image of the page
 * @param slug slug of the user/url (username)
 */
export default function MetaTags({
	title = appName,
	description = appDescription,
	url = appURL,
	type = appType,
	image = appPreviewImage,
	slug = appName,
}) {
	return (
		<>
			<meta key="og:locale" property="og:locale" content="en_IN" />
			<meta key="description" name="description" content={description} />
			<meta property="profile:username" content={slug} />

			<meta key="og:site_name" property="og:site_name" content={appName} />
			<meta key="og:title" property="og:title" content={title} />
			<meta
				key="og:description"
				property="og:description"
				content={description}
			/>
			<meta key="og:url" property="og:url" content={url} />
			<meta key="og:type" property="og:type" content={type} />
			<meta key="og:image" property="og:image" content={image} />
			<meta key="og:image:url" property="og:image:secure_url" content={image} />
			<meta key="og:image:alt" property="og:image:alt" content={title} />

			<meta key="twitter:title" property="twitter:title" content={title} />
			<meta
				key="twitter:description"
				property="twitter:description"
				content={description}
			/>
			<meta key="twitter:image" property="twitter:image" content={image} />
			<meta
				key="twitter:image:alt"
				property="twitter:image:alt"
				content={title}
			/>
			<meta key="twitter:site" property="twitter:site" content={url} />
			<meta
				key="twitter:card"
				name="twitter:card"
				content="summary_large_image"
			/>
		</>
	);
}

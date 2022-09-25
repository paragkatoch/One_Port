import Head from "next/head";
// import { sanityClient } from "packages/sanity";
// import { getUserPublicProfile } from "packages/sanity/query";
import MetaTags from "src/components/MetaTags";
import Profile from "src/components/Profile";
import { BlockData, theme } from "src/components/Profile/utils/types";
import { appURL } from "src/utils/appData";
import { blocks } from "src/utils/data";
import Venkata from "src/components/Profile/data/Venkata.json";
import Vivek from "src/components/Profile/data/Vivek.json";
import ProfileData from "src/components/Profile/data/block.json";

const dataObject = {
	venkata: Venkata,
	vivek: Vivek,
};

type slugType = keyof typeof dataObject;

interface ProfileData {
	name: string;
	blocks: BlockData[];
	categories: string[];
	theme: theme;
}

export function getStaticPaths() {
	return { paths: [], fallback: "blocking" };
}

export function getStaticProps({ params }: { params: { profile: string } }) {
	const slug = params.profile as slugType;

	// get user public profile data based on url slug
	// const data: ProfileData[] = await sanityClient.fetch(
	// 	getUserPublicProfile(slug)
	// );

	// if user not found
	// if (data.length === 0) {
	// 	return { notFound: true };
	// }

	const { categories, blocks, theme, name } = dataObject[slug] ?? ProfileData;

	return {
		props: {
			categories,
			theme,
			name,
			slug,
			blocksData: blocks.map(({ _key, ...item }) => ({
				...item,
				id: _key,
			})),
		},
	};
}

export default function PublicProfile({
	categories,
	blocksData,
	theme,
	name,
	slug,
}: {
	categories: string[];
	blocksData: BlockData[];
	theme: theme;
	name: string;
	slug: string;
}) {
	return (
		<>
			<Head>
				<title>{name}</title>

				<MetaTags
					{...{
						title: name,
						description:
							blocksData[0].blockType === blocks.intro
								? blocksData[0].description
								: "",
						url: `${appURL}/${slug}`,
						image: "https://i.ibb.co/FK5RzPQ/oneport-share.png",
						slug,
					}}
				/>
			</Head>

			<Profile
				{...{ categories, blocksData, theme, name, slug, children: <></> }}
			/>
		</>
	);
}

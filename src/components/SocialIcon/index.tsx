/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Behance from "./assets/images/behance.svg";
import Medium from "./assets/images/medium.svg";
import Pinterest from "./assets/images/pinterest.svg";
import Reddit from "./assets/images/reddit.svg";
import Snapchat from "./assets/images/snapchat.svg";
import Tiktok from "./assets/images/tiktok.svg";
import Dribbble from "./assets/images/dribbble.svg";
import Github from "./assets/images/github.svg";
import Instagram from "./assets/images/instagram.svg";
import LinkedIn from "./assets/images/linkedin.svg";
import Spotify from "./assets/images/spotify.svg";
import Twitch from "./assets/images/twitch.svg";
import Youtube from "./assets/images/youtube.svg";
import Twitter from "./assets/images/twitter.svg";
import Gumroad from "./assets/images/gumroad.svg";
import Facebook from "./assets/images/facebook.svg";
import Imdb from "./assets/images/imdb.svg";
import Website from "./assets/images/website.svg";
import { socialHandle } from "../Profile/utils/types";
import { socialHandles } from "../Profile/utils/data";

// Component to return icon for SocialBlock based on blockType
export default function SocialIcon({ type, ...props }: { type: socialHandle }) {
	let ImageComponent;

	switch (type) {
		case socialHandles.behance:
			ImageComponent = Behance;
			break;
		case socialHandles.medium:
			ImageComponent = Medium;
			break;
		case socialHandles.pinterest:
			ImageComponent = Pinterest;
			break;
		case socialHandles.reddit:
			ImageComponent = Reddit;
			break;
		case socialHandles.snapchat:
			ImageComponent = Snapchat;
			break;
		case socialHandles.tiktok:
			ImageComponent = Tiktok;
			break;
		case socialHandles.dribbble:
			ImageComponent = Dribbble;
			break;
		case socialHandles.IMDb:
			ImageComponent = Imdb;
			break;
		case socialHandles.gumroad:
			ImageComponent = Gumroad;
			break;
		case socialHandles.twitter:
			ImageComponent = Twitter;
			break;
		case socialHandles.github:
			ImageComponent = Github;
			break;
		case socialHandles.instagram:
			ImageComponent = Instagram;
			break;
		case socialHandles.linkedin:
			ImageComponent = LinkedIn;
			break;
		case socialHandles.spotify:
			ImageComponent = Spotify;
			break;
		case socialHandles.twitch:
			ImageComponent = Twitch;
			break;
		case socialHandles.youtube:
			ImageComponent = Youtube;
			break;
		case socialHandles.facebook:
			ImageComponent = Facebook;
			break;
		case socialHandles.website:
			ImageComponent = Website;
			break;
		default:
			return <></>;
	}

	return <ImageComponent {...props} />;
}

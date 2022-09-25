/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	eslint: {
		dirs: ["src"],
	},

	// image domains
	images: {
		domains: [
			"cdn.sanity.io",
			"images.unsplash.com",
			"i.ibb.co",
			"i.imgur.com",
			"instagram.fnag11-1.fna.fbcdn.net",
		],
	},

	// svg component
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;

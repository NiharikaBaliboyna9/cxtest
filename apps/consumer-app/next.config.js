/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
			// TODO: Add further security by granular whitelisting
		],
	},
	reactStrictMode: true,
}
	

module.exports = {
	nextConfig,
	async redirects() {
		return [
			{
				source: '/sg',
				destination: '/',
				permanent: true,
			},
		]
	},
}
}

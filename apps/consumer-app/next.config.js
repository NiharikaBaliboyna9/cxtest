/** @type {import('next').NextConfig} */

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
	output: "standalone",
experimental: {
outputFileTracingRoot: path.join(__dirname, "../../"),
},
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

module.exports = {
	nextConfig,
}

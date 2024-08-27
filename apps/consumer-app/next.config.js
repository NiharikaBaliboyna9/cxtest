/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
  output: 'standalone',
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, '../../'),           // Here you can modify as per your use case. Currently, the NextJS folder is two folders inside from the root folder, you can modify the same for one folder.
  }
}

module.exports = {
	nextConfig,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
       HEAD:next.config.mjs
        protocol: 'https',
        hostname: 'hotumatur.com',
        pathname: '/wp-content/uploads/**', // Path to images in WordPress
      },
    ],
  },
};

   HEAD:next.config.mjs
export default nextConfig;


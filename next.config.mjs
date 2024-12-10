/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hotumatur.com',
        pathname: '/wp-content/uploads/**', // Path to images in WordPress
      },
    ],
  },
};

export default nextConfig;
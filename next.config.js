/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME, // Configura el hostname de WordPress
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

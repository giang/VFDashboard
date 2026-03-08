/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true, // Bắt buộc cho static export
  },
  trailingSlash: true,
};

module.exports = nextConfig;
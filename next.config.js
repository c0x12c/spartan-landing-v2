const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};

module.exports = withBundleAnalyzer(nextConfig);

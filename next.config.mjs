import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['www.themealdb.com'],
  },
  reactStrictMode: false,
};

export default withPlaiceholder(nextConfig);

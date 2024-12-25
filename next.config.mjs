import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
};

export default withPlaiceholder(nextConfig);

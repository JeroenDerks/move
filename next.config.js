/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: { serverActions: true },
  images: {
    domains: ["pbs.twimg.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/db", "@repo/ui"],
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;

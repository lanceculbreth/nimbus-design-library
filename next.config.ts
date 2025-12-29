import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/nimbus-design-library' : '',
  assetPrefix: isProd ? '/nimbus-design-library/' : '',
  trailingSlash: true,
};

export default nextConfig;

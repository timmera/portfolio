import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  basePath: '/portfolio',
  trailingSlash: true, // This ensures the URLs are properly handled on GitHub Pages
  distDir: 'out',
};

export default nextConfig;

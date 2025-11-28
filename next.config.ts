import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lacasadelganadero.com.co',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '/image-photo/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/originals/**',
      },
      {
        protocol: 'https',
        hostname: 'concepto.de',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Fix para hidratación con Tailwind v4
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;

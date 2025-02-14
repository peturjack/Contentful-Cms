import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.ctfassets.net'], // Contentful's image CDN
  },
};

export default nextConfig;

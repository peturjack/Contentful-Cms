import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: 'images.ctfassets.net', // Contentful's image CDN
    }],
  },
};

export default nextConfig;

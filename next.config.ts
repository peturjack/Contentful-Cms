import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
       // Contentful's image CDN
      protocol: 'https', 
      hostname: 'images.ctfassets.net',

    }],
  },
};

export default nextConfig;

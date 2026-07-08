import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed custom distDir to use default '.next' directory for Hostinger deployment
  allowedDevOrigins: ['192.168.29.198', 'localhost'],

  // Enable production optimizations
  compress: true,
  
  // Optimize asset caching for the frames
  async headers() {
    return [
      {
        source: '/ezgif-774cadbbbbc65ee4-png-split/:all*(webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

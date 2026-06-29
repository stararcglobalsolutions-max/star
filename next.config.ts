import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/stararc",
  distDir: "dist",  // Changes output folder name to 'dist'
  allowedDevOrigins: ['192.168.29.198', 'localhost'],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // Removed custom distDir to use default '.next' directory for Hostinger deployment
  allowedDevOrigins: ['192.168.29.198', 'localhost'],
};

export default nextConfig;

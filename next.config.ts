import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "*.trycloudflare.com",
    "192.168.*.*"
  ],
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        '192.168.*.*:3000',
        '*.trycloudflare.com',
      ],
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.56.1", "localhost", "127.0.0.1"],
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
};

export default nextConfig;

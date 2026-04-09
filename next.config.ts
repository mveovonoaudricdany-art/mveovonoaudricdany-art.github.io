/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.56.1", "localhost", "127.0.0.1"],
  output: "export",
  images: {
    // Pour Next.js 16+ : utiliser remotePatterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

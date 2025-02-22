import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  // basePath: "/b47labs.com",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

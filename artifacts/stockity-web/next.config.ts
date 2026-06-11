import type { NextConfig } from "next";

const replitDomain = process.env.REPLIT_DEV_DOMAIN;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  ...(replitDomain
    ? { allowedDevOrigins: [replitDomain, `*.${replitDomain}`] }
    : {}),
};

export default nextConfig;

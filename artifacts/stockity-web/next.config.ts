import type { NextConfig } from "next";

const replitDomain = process.env.REPLIT_DEV_DOMAIN;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  ...(replitDomain
    ? { allowedDevOrigins: [replitDomain, `*.${replitDomain}`] }
    : {}),
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap-xml",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      {
        source: "/pt",
        destination: "/pt-br",
        permanent: true,
      },
      {
        source: "/pt/:path*",
        destination: "/pt-br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

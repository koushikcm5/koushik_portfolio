import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "growaitech.com",
      },
      {
        protocol: "https",
        hostname: "impactmaker.in",
      },
      {
        protocol: "https",
        hostname: "www.femtechsolutionslm.co.in",
      },
      {
        protocol: "https",
        hostname: "kprlegacyawards.com",
      },
    ],
  },
};

export default nextConfig;

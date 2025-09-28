import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "k50v2dvnrk.ufs.sh"
      },
    ],
  },
};

export default nextConfig;

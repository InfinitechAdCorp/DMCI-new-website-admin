import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "dmcicorporation.com",
      "infinitech-testing5.online",
      "localhost"           // added localhost here (no protocol, no port)
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;

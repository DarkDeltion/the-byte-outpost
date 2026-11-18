import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites() {
    return [
      { source: '/producten', destination: '/Producten' },
      { source: '/over-ons', destination: '/OverOns' },
    ];
  },
};

export default nextConfig;

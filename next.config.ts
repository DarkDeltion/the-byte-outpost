import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites() {
    return [{ source: '/producten', destination: '/Producten' }];
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ilhomgroup.uz" },
      { protocol: "https", hostname: "cdn.lacafe.uz" },
    ],
  },
};

export default withNextIntl(nextConfig);

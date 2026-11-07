import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true" && {
    output: "export",
    basePath: "/chernovol_na_landing",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_PAGES === "true" ? "/chernovol_na_landing" : "",
  },
};

export default nextConfig;

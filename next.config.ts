import type { NextConfig } from "next";

// GitHub Actions sets PAGES_BASE_PATH (e.g. "/portfolio") when the repo is not
// <username>.github.io; for the user site it is empty and the site lives at "/".
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  // Plain <img> tags don't get basePath automatically; src/lib/asset.ts reads this.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

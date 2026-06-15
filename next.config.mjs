/** @type {import('next').NextConfig} */

// Served from https://<user>.github.io/llamarist-luani/ on GitHub Pages.
// Set repo to "" if you later use a custom domain.
const repo = "llamarist-luani";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;

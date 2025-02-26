/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // Export as static HTML
  basePath: isGithubPages ? "/portfolio" : "",
  assetPrefix: isGithubPages ? "/portfolio" : "",
};

export default nextConfig;

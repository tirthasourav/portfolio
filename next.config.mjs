/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // Export as static HTML
  basePath: isGithubPages ? "/your-repo-name" : "",
  assetPrefix: isGithubPages ? "/your-repo-name/" : "",
};

export default nextConfig;

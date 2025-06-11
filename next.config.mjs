/** @type {import('next').NextConfig} */

// const repo = "nart-portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/nart-portfolio" : "",
  assetPrefix: isProd ? "/nart-portfolio/" : "",
  images: { unoptimized: true },
};

export default nextConfig;

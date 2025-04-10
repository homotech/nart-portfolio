/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/nart-portfolio",
  assetPrefix: "/nart-portfolio/docs/",
  images: { unoptimized: true },
};

export default nextConfig;

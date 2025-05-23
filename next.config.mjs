/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/nart-portfolio" : "",
  assetPrefix: isProd ? "/nart-portfolio/" : "",
  images: { unoptimized: true },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/info": { page: "/info" },
      "/portfolio": { page: "/portfolio" },
      "/news": { page: "/news" },
    };
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import config from "./config.json" assert { type: "json" };

const nextConfig = {
  env: {
    NEXTAUTH_URL: config.nextAuthUrl,
  },
};

export default nextConfig;

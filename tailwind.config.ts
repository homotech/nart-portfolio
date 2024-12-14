import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // opacity: ["responsive", "hover", "focus"],
      // transform: ["responsive", "hover", "focus"],
      colors: {
        "chinese-white": "#def3e0",
        crayola: "#b2e67a",
        "go-green": "#00ab62",
        "phthalo-green": "#12332a",
        "smoky-black": "#0d0d0d",
        "off-black": "#252525",
        grey: "#818181",
      },
      fontFamily: {
        "br-firma-thin": ['"br-firma-thin"', "sans-serif"],
        "br-firma-light": ['"br-firma-light"', "sans-serif"],
        "br-firma-regular": ['"br-firma-regular"', "sans-serif"],
        "br-firma-bold": ['"br-firma-bold"', "sans-serif"],
        "br-firma-medium": ['"br-firma-medium"', "sans-serif"],
        "br-firma-semibold": ['"br-firma-semibold"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

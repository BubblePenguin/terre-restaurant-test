import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mint: "#00857A",
        black: "#161616",
      },
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
        ldesktop: "1600px",
      },
      spacing: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
        ldesktop: "1600px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baseDark: "#070A12",
        mainWhite: "#F8F7F2",
        royalGold: "#C9A86A",
        moonSilver: "#D8DEE9",
        blueAccent: "#7DB7FF",
        redAccent: "#B83A3A",
      },
      boxShadow: {
        glow: "0 0 36px rgba(201, 168, 106, 0.22)",
        "blue-glow": "0 0 44px rgba(125, 183, 255, 0.18)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans JP",
          "Yu Gothic",
          "YuGothic",
          "Hiragino Sans",
          "Meiryo",
          "sans-serif",
        ],
        serif: ["Cormorant Garamond", "Times New Roman", "Yu Mincho", "serif"],
      },
      backgroundImage: {
        "radial-veil":
          "radial-gradient(circle at 25% 20%, rgba(201,168,106,0.18), transparent 28%), radial-gradient(circle at 78% 16%, rgba(125,183,255,0.12), transparent 26%), radial-gradient(circle at 50% 88%, rgba(216,222,233,0.08), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;

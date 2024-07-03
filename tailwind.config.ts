import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", "black", "cupcake", "light", "forest", "cyberpunk"],
  },
};

export default config;

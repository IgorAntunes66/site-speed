import type { Config } from "tailwindcss";
const tailwindcssAnimate = require('tailwindcss-animate');

const config: Config = {
  content: ["src/**/*.{ts, tsx, js, jsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate],
};
export default config;

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  content: ["src/**/*.{ts, tsx, js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "chakra-petch": ['var(--font-chakra-petch)', "sans-serif"],
        "poppins": ['var(--font-poppins)', "sans-serif"]
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;

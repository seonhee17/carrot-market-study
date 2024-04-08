import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius:{
        "sexy-name": "11.11px",
      },
      margin:{
        "tomato": "120px"
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
      },
      colors: {
        secondYellow: '#ffbd12',
        tomatoColor: '#f85a2b',
      },
    },
  },
  plugins: [],
};
export default config;

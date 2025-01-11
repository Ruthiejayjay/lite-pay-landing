import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        thin: '1.2rem',
        "normal-lite": "1.4rem",
        normal: "1.6rem",
        "small-lite": '2rem',
        small: '2.4rem',
        "medium-lite": '3.2rem',
        medium: '4.8rem',
        "large-lite": '5.2rem',
        large: '6rem'
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        background: '#F5F6FA',
        brand: {
          DEFAULT: '#6b43fb',
          50: '#8E98A8',
          100: '#d1c5fe',
          200: '#bba9fd',
          300: '#9c81fc',
          400: '#8969fc',
          500: '#6b43fb',
          600: '#613de4',
          700: '#4c30b2',
          800: '#3b258a',
          900: '#2d1c69',
        },

        dark: {
          DEFAULT: '#2A2A2A',
          50: '#eaeaea',
          100: '#bdbdbd',
          200: '#9d9d9d',
          300: '#707070',
          400: '#555555',
          500: '#2a2a2a',
          600: '#262626',
          700: '#1e1e1e',
          800: '#171717',
          900: '#121212',
        },
        error: {
          DEFAULT: '#C30000',
          50: '#f9e6e6',
          100: '#ecb0b0',
          200: '#e38a8a',
          300: '#d75454',
          400: '#cf3333',
          500: '#c30000',
          600: '#b10000',
          700: '#8a0000',
          800: '#6b0000',
          900: '#520000',
        },

        warn: {
          DEFAULT: '#FFB800',
          50: '#fff8e6',
          100: '#ffe9b0',
          200: '#ffde8a',
          300: '#ffcf54',
          400: '#ffc633',
          500: '#ffb800',
          600: '#e8a700',
          700: '#b58300',
          800: '#8c6500',
          900: '#6b4d00',
        },
        success: {
          DEFAULT: '#54d684',
          50: '#e6f9ed',
          100: '#b0ecc6',
          200: '#8ae3ab',
          300: '#54d684',
          400: '#33ce6d',
          500: '#54d684',
          600: '#00b142',
          700: '#008a33',
          800: '#006b28',
          900: '#00511e',
        }
      },
    },
  },
  plugins: [],
};
export default config;

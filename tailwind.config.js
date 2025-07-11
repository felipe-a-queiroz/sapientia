/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A237E",
          light: "#534bae",
          dark: "#000051",
        },
        secondary: {
          DEFAULT: "#00ACC1",
          light: "#5ddef4",
          dark: "#007c91",
        },
        accent: {
          DEFAULT: "#FFB300",
          light: "#ffe54c",
          dark: "#c68400",
        },
        neutral: {
          DEFAULT: "#F5F5F5",
          dark: "#212121",
          light: "#ffffff",
        },
        success: {
          DEFAULT: "#43A047",
          light: "#76d275",
          dark: "#00701a",
        },
        warning: {
          DEFAULT: "#FBC02D",
          light: "#fff263",
          dark: "#c49000",
        },
        error: {
          DEFAULT: "#E53935",
          light: "#ff6f60",
          dark: "#ab000d",
        },
        info: {
          DEFAULT: "#1E88E5",
          light: "#6ab7ff",
          dark: "#005cb2",
        },
      },
    },
  },
  plugins: [],
}

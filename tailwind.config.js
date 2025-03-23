/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        accent: "#AB8BFF",
        light: {
          100: "#D6C6FF",
          200: "#A8B8DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0f0d23",
        },
      },
    },
  },
  plugins: [],
};

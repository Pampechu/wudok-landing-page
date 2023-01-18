/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        wudokblack: "#123B59",
        wudokblackcontrast: "#1256E5",
        wudokligth: "#E0F5FF",
        wudokligthcontrast: "#56AFFF",
      },
    },
  },
  plugins: [],
};

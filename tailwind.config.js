module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 2s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.green.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
      colors: {
        mercury: {
          50: "#fefefe",
          100: "#fdfdfd",
          200: "#f9f9f9",
          300: "#f5f5f5",
          400: "#eeeeee",
          500: "#e6e6e6",
          600: "#cfcfcf",
          700: "#adadad",
          800: "#8a8a8a",
          900: "#717171",
        },
        nt: "rgba(200, 200, 22)",
        myred: {
          50: "#fefdfd",
          100: "#fdfbfb",
          200: "#faf5f5",
          300: "#f7efef",
          400: "#f0e3e3",
          500: "#ead7d7",
          600: "#d3c2c2",
          700: "#b0a1a1",
          800: "#8c8181",
          900: "#736969",
        },
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};

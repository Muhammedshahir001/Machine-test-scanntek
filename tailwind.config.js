/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#141414",
          200: "#0d0d0d",
          300: "#050505",
          400: "rgba(255, 255, 255, 0.25)",
          500: "rgba(20, 20, 20, 0.98)",
          600: "rgba(252, 252, 252, 0.32)",
          700: "rgba(255, 255, 255, 0.6)",
          800: "rgba(255, 255, 255, 0.5)",
        },
        white: "#fff",
        dodgerblue: "#0084f7",
        orange: "#f7a500",
        darkorange: {
          100: "#ff8006",
          200: "#f77300",
        },
        crimson: {
          100: "#ff005a",
          200: "#f70031",
        },
        darkmagenta: "#9410a5",
        mediumvioletred: "#a7236f",
        khaki: {
          100: "#f7dc67",
          200: "#e8e465",
        },
        coral: "#f56c40",
        darkturquoise: "#23cdd1",
        black: "#000",
        whitesmoke: "#f8f8f8",
        sandybrown: "#f2b45c",
        lightcoral: "#ef7075",
        mediumorchid: "#ae45c6",
        darkorchid: "#8639ba",
        hotpink: "#e958a1",
        lime: "#2dff1a",
        cornflowerblue: "#009fff",
        gold: "#ffd400",
        aqua: "#05fdf1",
        darkslategray: {
          100: "#414141",
          200: "#2f2f2f",
        },
        blk: "#121212",
        red: "#ff1a1a",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "0.67rem",
      "3xs": "0.56rem",
      "5xs": "0.44rem",
      xl: "1.11rem",
      sm: "0.78rem",
      base: "0.89rem",
      lg: "1rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
}


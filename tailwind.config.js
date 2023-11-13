/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      orange: "#f39f1e",
      blue: "DodgerBlue",
      "body-color": "#959CB1",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      xl_p1: "1201px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1519px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      textShadow: {
        // Define your custom text shadow classes here
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "nav-mobile": "url('/images/menu/map_menu.jpg')",
        "cta-mobile": "url('/image/HomeSlides/cta-mobile.jpg')"
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translateZ(0)",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

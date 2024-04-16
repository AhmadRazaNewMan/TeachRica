/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat"
    },
    extend: {
      colors: {
        navBg: "#ffffff",
        gray: "#F4F4F4",
        starGray: "D9D9D9",
        bluePrimary: "#04989E",
        blueSecondary: "#00C9DA",
        yellow: "#FFD15C",
        navClr: "rgba(255, 255, 255, 0.50);"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
    
      fontSize: {
        text6Xl: "74px",
      },
      width: {
        wAbout: "442px"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      // lg: "1440px",
    },
  },
}

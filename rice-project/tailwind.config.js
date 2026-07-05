/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#82A1BA",       // primary blue
        accent: "#A6FF00",        // accent green
        dark: "#232D3A",          // dark text/background
        secondaryBlue: "#55749C", // secondary blue
        lightBlue: "#6A97C7",     // light blue
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        script: ["Pinyon Script", "Alex Brush", "cursive"],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

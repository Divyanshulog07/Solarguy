/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLg: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" },
        },
        slideMd: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(116%)" },
        },
        slideSm: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(94%)" },
        },
      },
      animation: {
        slideLg: "slideLg 20s infinite",
        slideMd: "slideMd 20s infinite",
        slideSm: "slideSm 20s infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};




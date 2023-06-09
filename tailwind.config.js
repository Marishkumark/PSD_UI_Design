/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"],
        Oswald: ["Oswald"],
        quote: ["Catamaran"],
      },
      inset: {
        "5%": "5%",
        "400px": "47%",
        98: "34rem",
      },
      height: {
        128: "35rem",
      },
      width: {
        128: "30rem",
        129: "35rem",
      },
      translate: {
        98: "26rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateY(2rem)",
          },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 6s ease-in-out infinite",
      },
      fontSize: {
        lm: ["170px", "180px"],
      },
      borderRadius: {
        "80px": "80px",
      },
      borderWidth: {
        14: "14px",
      },
    },
    plugins: [],
  },
};

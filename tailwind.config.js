/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mydex: {
          green: "#0B3D2E",
          "green-deep": "#072A20",
          gold: "#C9A227",
          "gold-soft": "#D4B84A",
          cream: "#F8F3EA",
          beige: "#EFE3D2",
          ink: "#1F2937",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Montserrat"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 18px 40px rgba(11, 61, 46, 0.12)",
        gold: "0 10px 30px rgba(201, 162, 39, 0.25)",
      },
      backgroundImage: {
        "green-lux":
          "radial-gradient(circle at 20% 20%, rgba(201,162,39,0.12), transparent 40%), linear-gradient(135deg, #0B3D2E, #072A20)",
        "cream-lux":
          "radial-gradient(circle at 80% 0%, rgba(201,162,39,0.08), transparent 35%), linear-gradient(180deg, #F8F3EA, #EFE3D2)",
      },
    },
  },
  plugins: [],
};
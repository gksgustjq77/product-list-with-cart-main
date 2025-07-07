/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ['"Red Hat Text"', "red-hat"],
      },
    },
  },
  screens: {
    xs: "480px",
    md: "768px",
    lg: "1200px",
  },

  plugins: [require("tailwind-scrollbar")],
};

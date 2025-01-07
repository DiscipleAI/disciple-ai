/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#B31942",
        lightGreen: "#0A3161",
      },
    },
  },
  plugins: [],
};

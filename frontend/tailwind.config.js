/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#6A4DFF",
        black: "#353535",
      },
    },
  },
  plugins: [],
};

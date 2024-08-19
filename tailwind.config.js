/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17167e",
        secondary: "#f3f3f3",
        muted: "#737373",
      },
    },
  },
  plugins: [],
};


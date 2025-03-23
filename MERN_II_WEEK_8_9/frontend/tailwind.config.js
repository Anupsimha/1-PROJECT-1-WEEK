/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // 👈 Add this line if missing
  daisyui: {
    themes: [
      "light",
      {
        black: {
          primary: "rgb(255, 255, 255)", // Twitter/X primary blue
          secondary: "#000000", // Completely black
          accent: "#1D9BF0", // Blue accent color
          neutral: "#000000", // Black background
          "base-100": "#000000", // Black for base color
          info: "#1D9BF0",
          success: "#00ba7c",
          warning: "#ffad1f",
          error: "#f4212e",
        },
      },
    ],
  },
};
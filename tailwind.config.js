/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#1c1c1c",
        "fg-dark": "#e5e5e5",
        "text-color-dark": "#f2f2f2",
        "bg-light": "#fff",
        "fg-light": "#3a3a3a",
        "text-color-light": "#171717",
      },
      fontFamily: {
        inter: ["Inter", "var(--font-fallback)"],
      },
    },
  },
  plugins: [],
};

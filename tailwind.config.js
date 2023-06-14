/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#18171C",
        foreground: "#FEFEFF",
        "accent-1": "#A5A3AE",
        "accent-2": "#EAEAEA",
        primary: "#673ED7",
      },
      backgroundImage: {
        "header-gradient":
          "linear-gradient(217.85deg, rgba(103, 62, 215, 0.3) 5.79%, rgba(103, 62, 215, 0) 100%)",
      },
      gridTemplateColumns: {
        container: "minmax(820px, 880px) 1fr",
      },
      fontSize: {
        h1: "2rem",
      },
      fontFamily: {
        inter: ["Inter", "var(--font-fallback)"],
      },
    },
  },
  plugins: [],
};

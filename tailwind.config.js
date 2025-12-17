/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#EFA42C",
          "primary-light": "#F7C878",
          "primary-dark": "#C97F0D",
          secondary: "#FFE7C2",

          gray100: "#F8F8F8",
          gray200: "#ECECEC",
          gray400: "#A1A1A1",
          gray600: "#6B6B6B",
          gray900: "#1A1A1A",

          success: "#2DBE5E",
          warning: "#F2B705",
          danger: "#E84343",
        },
      },

      borderRadius: {
        base: "8px",
        card: "12px",
        container: "16px",
      },

      boxShadow: {
        card: "0px 2px 8px rgba(0,0,0,0.08)",
      },

      fontSize: {
        display: ["2.4rem", "1.2"],
        h1: ["2rem", "1.2"],
        h2: ["1.5rem", "1.3"],
        body: ["1rem", "1.6"],
        small: ["0.875rem", "1.4"],
      },
    },
  },
  plugins: [],
};

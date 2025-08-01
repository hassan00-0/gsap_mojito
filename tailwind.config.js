/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#e7d393",
        "white-100": "#efefef",
      },
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
        "modern-negra": ["Modern Negra", "sans-serif"],
        serif: ["DM Serif Text", "serif"],
      },
      maxWidth: {
        "2xs": "16rem", // This was added for max-w-2xs
        "3xs": "12rem",
      },
      borderRadius: {
        "4xl": "2rem", // This was added for rounded-4xl
        "5xl": "2.5rem",
      },
      // ADD THIS SECTION FOR CUSTOM BORDER WIDTHS
      borderWidth: {
        1: "1px", // This makes 'border-b-1' (or border-1) work, meaning 1 pixel
      },
      screens: {
        customMd: "763px",
      },
    },
  },
  plugins: [],
};

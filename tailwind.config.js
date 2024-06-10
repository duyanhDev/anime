/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray333: "#333",
      },
      screens: {
        // Define custom screen sizes with min and max widths
        mobile: { max: "639px" }, // Up to 639px
        tablet: { min: "640px", max: "1023px" }, // From 640px to 1023px
        pc: { min: "1024px" }, // From 1024px and up
        // Optionally, add custom breakpoints if needed
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

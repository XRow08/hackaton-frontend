/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        "brand-primary": "#0E0D1A",
        "brand-text": "#FFA958",
        "feedback-success": "#00aa30",
        "feedback-warning": "#ffc737",
        "feedback-error": "#cc0000",
        "feedback-info": "#5df2fe",
      },
      backgroundImage: {
        banner: "url(/banner_ow.png)",
        logoxr: "url(/logoXR.png)",
        latam: "url(/latam.png)",
        rio: "url(/rio.png)",
      },
    },
  },
  plugins: [],
};

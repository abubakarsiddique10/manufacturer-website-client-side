module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#232F3E",
          "secondary": "#EAEDED",
          "accent": "#F7CA00",
          "neutral": "#FA8900",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
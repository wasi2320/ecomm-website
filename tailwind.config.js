/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",

        // existing
        floatGradient: "floatGradient 14s ease-in-out infinite",

        // 🔥 NEW
        shimmer: "shimmer 1.6s ease-in-out infinite",
        glowPulse: "glowPulse 2.5s ease-in-out infinite",
      },

      keyframes: {
        floatGradient: {
          "0%": {
            transform: "translateX(-10%) translateY(0%)",
          },
          "50%": {
            transform: "translateX(10%) translateY(6%)",
          },
          "100%": {
            transform: "translateX(-10%) translateY(0%)",
          },
        },

        // 🔥 SHIMMER SWEEP
        shimmer: {
          "0%": {
            transform: "translateX(-150%)",
          },
          "100%": {
            transform: "translateX(250%)",
          },
        },

        // 🔥 SOFT GLOW PULSE (for badges / highlights)
        glowPulse: {
          "0%, 100%": {
            opacity: 0.4,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 0.8,
            transform: "scale(1.05)",
          },
        },
      },

      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },

      fontFamily: {
        bodyFont: ["DM Sans", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },

      colors: {
        primeColor: "#262626",
        lightText: "#6D6D6D",
      },

      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",

        // 🔥 premium glow shadows (optional usage)
        glowWhite: "0 0 40px rgba(255,255,255,0.08)",
        glowPurple: "0 0 60px rgba(168,85,247,0.25)",
        glowOrange: "0 0 60px rgba(249,115,22,0.25)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};
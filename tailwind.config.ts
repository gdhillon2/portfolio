import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            translate: "translateY(0)",
            opacity: "1",
          }
        },
        "slide-in-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        }
      },
      animation: {
        "slide-in-left": "slide-in-left 0.4s ease-in-out forwards",
        "slide-in-right": "slide-in-right 0.4s ease-in-out forwards",
        "slide-in-up": "slide-in-up 0.4s ease-in-out forwards",
        "slide-in-down": "slide-in-down 0.4s ease-in-out forwards",
        "slide-in-left-delay-200": "slide-in-left 0.4s ease-in-out 0.2s forwards",
        "slide-in-right-delay-200": "slide-in-right 0.4s ease-in-out 0.2s forwards",
        "slide-in-up-delay-200": "slide-in-up 0.4s ease-in-out 0.2s forwards",
        "slide-in-down-delay-200": "slide-in-down 0.4s ease-in-out 0.2s forwards",
      },
    },
  },
  plugins: [],
};
export default config;

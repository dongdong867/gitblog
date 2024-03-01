import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        foreground: "rgb(var(--foreground))",
        background: "rgb(var(--background))",
        white: "rgb(var(--white))",
        black: "rgb(var(--black))",
        red: "rgb(var(--red))",
        orange: "rgb(var(--orange))",
        yellow: "rgb(var(--yellow))",
        green: "rgb(var(--green))",
        mint: "rgb(var(--mint))",
        teal: "rgb(var(--teal))",
        cyan: "rgb(var(--cyan))",
        blue: "rgb(var(--blue))",
        indigo: "rgb(var(--indigo))",
        purple: "rgb(var(--purple))",
        pink: "rgb(var(--pink))",
        brown: "rgb(var(--brown))",
        gray: "rgb(var(--gray))",
        gray2: "rgb(var(--gray2))",
        gray3: "rgb(var(--gray3))",
        gray4: "rgb(var(--gray4))",
        gray5: "rgb(var(--gray5))",
        gray6: "rgb(var(--gray6))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
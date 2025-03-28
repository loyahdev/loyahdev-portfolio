import type { Config } from "tailwindcss";
import { types } from "util";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        portfolio: {
          primary: "#6E59A5",
          secondary: "#E5DEFF",
          accent: "#9b87f5",
          dark: "#9c84d9",
          react: "rgba(97, 218, 251, 0.3)",
          nodejs: "rgba(114, 169, 98, 0.3)",
          mongodb: "rgba(77, 179, 61, 0.3)",
          tailwindcss: "rgba(6, 182, 212, 0.3)",
          firebase: "rgba(255, 125, 83, 0.3)",
          typescript: "rgba(0, 122, 204, 0.3)",
          materialui: "rgba(0, 184, 148, 0.3)",
          chartjs: "rgba(255, 99, 132, 0.3)",
          weatherapi: "rgba(255, 206, 84, 0.3)",
          styledcomponents: "rgba(224, 122, 95, 0.3)",
          HTML: "rgba(255, 99, 71, 0.3)",       
          JavaScript: "rgba(247, 223, 30, 0.3)",
          Swift: "rgba(255, 59, 48, 0.3)",
          Python: "rgba(255,219,83,0.7)",
          C: "rgba(101,154,210,0.7)",
          "C++": "rgba(101,154,210,0.7)"
        },
        primary: {
          DEFAULT: "#10B981",
          foreground: "hsl(var(--primary-foreground))",
        },
        primary_darker: {
          DEFAULT: "#0c855c",
          foreground: "hsl(var(--secondary-foreground))",
        },
        primary_lighter: {
          DEFAULT: "#11d695",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "rgba(22, 36, 33, 0.4)",
          hover: "rgba(22, 36, 33, 0.6)",
        },
        section: {
          title: "#6B7280",
        },
      },
      backgroundImage: {
        "gradient-dark": "radial-gradient(circle at center, #0A1F1C 0%, #041210 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "animated-gradient":
          "linear-gradient(90deg, rgba(32, 124, 229, 0.1), rgba(185, 72, 16, 0.1), rgba(139, 92, 246, 0.1))",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "gradient-shift": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        "twinkling-stars": {
          "0%, 100%": { opacity: "0.5", transform: "translateY(0px)" },
          "50%": { opacity: "1", transform: "translateY(-2px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "twinkling-stars": "twinkling-stars 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
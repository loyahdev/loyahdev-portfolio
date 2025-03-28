import type { Config } from "tailwindcss";

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
      padding: "0",
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
          "linear-gradient(90deg, rgba(32, 124, 229, 0.1), rgb(7, 52, 20), rgba(139, 92, 246, 0.1))",
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

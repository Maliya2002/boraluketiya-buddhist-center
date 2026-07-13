import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFFDF0",
          100: "#FFF9D4",
          200: "#FFF3A8",
          300: "#FFE97A",
          400: "#FFDC4A",
          500: "#D4AF37",
          600: "#B8941E",
          700: "#9A7A12",
          800: "#7D620A",
          900: "#624C06",
          950: "#3D2F03",
        },
        saffron: {
          50: "#FFF8F0",
          100: "#FFEEDA",
          200: "#FFD9A8",
          300: "#FFC070",
          400: "#FFA040",
          500: "#FF8C1A",
          600: "#E67300",
          700: "#BF5E00",
          800: "#994A00",
          900: "#7A3B00",
        },
        temple: {
          50: "#FAF5F0",
          100: "#F5E8DC",
          200: "#EAD0B8",
          300: "#DCB48F",
          400: "#CD9466",
          500: "#8B5E3C",
          600: "#7A4F2E",
          700: "#664022",
          800: "#503218",
          900: "#3D250F",
        },
        lotus: {
          50: "#FFF0F7",
          100: "#FFD6EC",
          200: "#FFADD8",
          300: "#FF80C0",
          400: "#FF52A6",
          500: "#FF1F8A",
          600: "#D90070",
          700: "#B3005A",
          800: "#8C0047",
          900: "#660035",
        },
        bodhi: {
          50: "#F0FBF0",
          100: "#D1F5D1",
          200: "#A3EBA3",
          300: "#72DB72",
          400: "#48C748",
          500: "#2AA82A",
          600: "#1F8C1F",
          700: "#167016",
          800: "#0E560E",
          900: "#083D08",
        },
        cream: {
          50: "#FDFCF8",
          100: "#FAF8F2",
          200: "#F5F1E8",
          300: "#F0EBD9",
          400: "#EAE3CC",
          500: "#E2D9BA",
          600: "#D5C99A",
          700: "#C5B476",
          800: "#B09D55",
          900: "#8E7D3C",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "lotus-bloom": {
          "0%": { transform: "scale(0) rotate(-180deg)", opacity: "0" },
          "60%": { transform: "scale(1.1) rotate(10deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": {
            boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
        "lotus-bloom": "lotus-bloom 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        breathe: "breathe 3s ease-in-out infinite",
      },
      boxShadow: {
        "gold-sm": "0 0 15px rgba(212, 175, 55, 0.3)",
        "gold-md": "0 0 30px rgba(212, 175, 55, 0.4)",
        "gold-lg": "0 0 60px rgba(212, 175, 55, 0.5)",
        "soft-sm": "0 2px 15px rgba(0, 0, 0, 0.06)",
        "soft-md": "0 4px 30px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 10px 60px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "475px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        background: "#0B1120", // Deep Space Navy
        foreground: "#E2E8F0", // Slate
        card: {
          DEFAULT: "#151E32", // Technical Blue-Grey
          foreground: "#E2E8F0",
        },
        popover: {
          DEFAULT: "#151E32",
          foreground: "#E2E8F0",
        },
        primary: {
          DEFAULT: "#F59E0B", // Safety Amber
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#06B6D4", // Cyan
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#06B6D4", // Cyan
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        border: "#1E293B",
        input: "#1E293B",
        ring: "#F59E0B",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      animation: {
        "cursor-blink": "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

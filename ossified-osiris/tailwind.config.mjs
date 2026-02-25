/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "rgb(var(--color-bg) / <alpha-value>)",
        paper: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        "7xl": ["4.5rem", { lineHeight: "0.95" }],
        "8xl": ["6rem", { lineHeight: "0.9" }],
        "9xl": ["7.5rem", { lineHeight: "0.9" }],
      },
      letterSpacing: {
        widecaps: "0.2em",
      },
    },
  },
  plugins: [],
};



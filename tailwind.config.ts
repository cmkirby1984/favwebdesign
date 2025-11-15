import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: "#FFFEF9",
        darkblue: "#35416B",
        posthog: "#F7A501",
        'posthog-yellow': '#F7A501',
        'posthog-cream': '#FFFEF9',
        'posthog-dark': '#35416B',
      },
      maxWidth: {
        'content': '1400px',
      },
      borderRadius: {
        'posthog': '8px',
        'posthog-lg': '12px',
      },
      boxShadow: {
        'posthog': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'posthog-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'posthog-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        '96': '24rem',
      },
      transitionDuration: {
        '200': '200ms',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

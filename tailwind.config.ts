import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'fdg-black': '#0A0A0A',
        'fdg-black-secondary': '#111111',
        'fdg-black-elevated': '#161616',
        'fdg-black-deep': '#080808',
        'fdg-gold': '#C9A84C',
        'fdg-gold-light': '#E2C47A',
        'fdg-gold-dark': '#A88A3A',
        'fdg-text': '#F0EBE1',
        'fdg-text-secondary': '#9A9A8A',
        'fdg-border': 'rgba(201, 168, 76, 0.15)',
        'fdg-overlay': 'rgba(10, 10, 10, 0.65)',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      spacing: {
        'section': '120px',
        'section-mobile': '80px',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
      transitionTimingFunction: {
        'fdg': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      borderRadius: {
        'fdg': '2px',
      },
    },
  },
  plugins: [],
};
export default config;

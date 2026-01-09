import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#22D3EE',
        neon: '#67e8f9',
        bg: 'rgb(var(--bg))',
        card: 'rgb(var(--card))',
        fg: 'rgb(var(--fg))',
        muted: 'rgb(var(--muted))',
        border: 'rgb(var(--border))'
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
} satisfies Config;

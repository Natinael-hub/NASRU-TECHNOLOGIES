import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#22D3EE", neon: "#67e8f9" },
    },
  },
  plugins: [],
} satisfies Config;

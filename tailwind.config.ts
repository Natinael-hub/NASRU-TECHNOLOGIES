import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { midnight: "#07111F", navy: "#0C1B30", panel: "#11253D", cyan: "#22D3EE", ice: "#E6F9FF", muted: "#A9BDD0" },
      fontFamily: { sans: ["Inter", "Arial", "sans-serif"] },
      boxShadow: { glow: "0 12px 45px rgba(34,211,238,.10)" }
    }
  },
  plugins: []
};
export default config;

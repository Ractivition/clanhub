import type { Config } from "tailwindcss";

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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gaming-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "neon-gradient": "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)",
        "cute-gradient": "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
        "pop-gradient": "linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)",
        "bubblegum": "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        "kawaii": "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 25%, #ffd3a5 50%, #fd9696 100%)",
        "pastel-rainbow": "linear-gradient(90deg, #ff9a9e 0%, #fecfef 25%, #c2e9fb 50%, #a1c4fd 75%, #d299c2 100%)",
        "soft-pink": "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
        "mint-fresh": "linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "dance": "dance 2s ease-in-out infinite",
        "heartbeat": "heartbeat 2s ease-in-out infinite",
        "rainbow": "rainbow 3s ease-in-out infinite",
        "bubble": "bubble 4s ease-in-out infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "bounce-cute": "bounce-cute 2s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out",
        "fade-in-scale": "fade-in-scale 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #8338ec, 0 0 10px #8338ec, 0 0 15px #8338ec" },
          "100%": { boxShadow: "0 0 10px #8338ec, 0 0 20px #8338ec, 0 0 30px #8338ec" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        dance: {
          "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(-5px) translateY(-5px)" },
          "50%": { transform: "translateX(5px) translateY(-10px)" },
          "75%": { transform: "translateX(-5px) translateY(-5px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        rainbow: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        bubble: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.05)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.2)" },
        },
        "bounce-cute": {
          "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

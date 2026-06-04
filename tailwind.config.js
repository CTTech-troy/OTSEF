


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds & surfaces
        background: '#ffffff',
        'background-soft': '#f8fafc',
        surface: '#ffffff',
        'surface-container': '#f8fafc',
        'surface-high': '#f5f7fb',
        'surface-highest': '#f3f4f6',
        'hover-surface': '#f3f4f6',

        // Text
        'on-surface': '#0f172a',
        'on-surface-variant': '#475569',
        'on-surface-muted': '#64748b',

        // Brand — Strong Blue NGO accent
        primary: '#2563eb',          // blue-600 — main brand blue
        'primary-strong': '#1d4ed8', // blue-700 — emphasis text + buttons
        'primary-soft': '#dbeafe',   // blue-100 — chip backgrounds
        secondary: '#60a5fa',        // blue-400 — softer accent
        tertiary: '#bfdbfe',         // blue-200 — softest tint

        // UI
        outline: '#e2e8f0',
        ink: '#0a2540',              // deep navy for primary CTAs
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 4px 6px rgba(15, 23, 42, 0.04), 0 24px 48px -12px rgba(15, 23, 42, 0.12)',
        'glow': '0 20px 40px -16px rgba(37, 99, 235, 0.4)',
      },
    },
  },
  plugins: [],
}



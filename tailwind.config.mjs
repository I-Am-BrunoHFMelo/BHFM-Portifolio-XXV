/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        highwind: ['Highwind', 'Cinzel', 'Trajan Pro', 'Georgia', 'serif'],
        ff: ['Cinzel', 'Trajan Pro', 'Times New Roman', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        amano: {
          50: '#fcfbfe',
          100: '#f7f5fa',
          200: '#efeaf5',
          300: '#e3dbee',
          400: '#ccbfe0',
          800: '#34293f',
          900: '#231b2b',
          cyan: '#a855f7',     // Main Primary (Purple-500)
          emerald: '#ec4899',  // Accent (Pink-500)
          azure: '#7e22ce',    // Deep Primary (Purple-700)
        },
        crystal: {
          950: '#0f0a17',
          900: '#170f23',
          850: '#1d122e',
          800: '#2c1a45',
          blue: '#c084fc',     // Dark Mode Primary (Purple-400)
          glow: 'rgba(168, 85, 247, 0.15)',
        },
        gold: {
          400: '#fbbf24',
          500: '#d4af37',
          600: '#b48a1c',
        }
      },
      boxShadow: {
        'ff-window': '0 8px 32px -4px rgba(0, 0, 0, 0.12), 0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        'ff-window-dark': '0 8px 32px -4px rgba(0, 0, 0, 0.6), 0 0 15px 1px rgba(192, 132, 252, 0.15)',
        'ff-glow': '0 0 25px rgba(168, 85, 247, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cursor-point': 'point 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        point: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        }
      }
    },
  },
  plugins: [],
};

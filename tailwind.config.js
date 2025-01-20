/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          800: '#4C1D95',
          900: '#3B0764',
        },
        orange: {
          500: '#FF6B35',
          600: '#E85A2C',
        },
        primary: {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
        },
        navy: {
          light: '#1E293B',
          DEFAULT: '#0F172A',
          dark: '#0B1222',
        },
        accent: {
          purple: '#8B5CF6',
          gray: '#94A3B8',
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}


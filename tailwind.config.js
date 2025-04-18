/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c0dfff',
          300: '#91c7ff',
          400: '#5aa4fe',
          500: '#3b82f6',
          600: '#2368e3',
          700: '#1a56d6',
          800: '#1e45af',
          900: '#1e3c8a',
        },
        gold: {
          50: '#fdf9e9',
          100: '#fbf1c7',
          200: '#f8e292',
          300: '#f5d25b',
          400: '#f3c42f',
          500: '#e9b213',
          600: '#d99b0c',
          700: '#b7790a',
          800: '#95600f',
          900: '#7a4e11',
        },
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 2px 5px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
};
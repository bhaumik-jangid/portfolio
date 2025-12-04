/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0D0D0D',
          800: '#121212',
          700: '#191919',
          600: '#222',
          500: '#1A1A1A',
        },
        cyan: {
          500: '#00CCFF',
        },
      },
      boxShadow: {
        'neon': '0 0 15px rgba(79, 70, 229, 0.5)',
        'neon-lg': '0 0 25px rgba(79, 70, 229, 0.8)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}


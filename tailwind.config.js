/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uide-primary': '#003366',
        'uide-secondary': '#FFB800',
        'uide-blue-light': '#004C99',
        'uide-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        'uide': '0 4px 6px -1px rgba(0, 51, 102, 0.1), 0 2px 4px -1px rgba(0, 51, 102, 0.06)',
        'uide-lg': '0 10px 15px -3px rgba(0, 51, 102, 0.1), 0 4px 6px -2px rgba(0, 51, 102, 0.05)',
      },
      animation: {
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 
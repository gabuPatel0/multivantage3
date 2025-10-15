/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6A00',
          600: '#FF6A00',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#28A745',
          600: '#16a34a',
          700: '#0F7A57',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #FF6A00 0%, #FF8A3D 35%, #FFFFFF 50%, #28A745 85%, #0F7A57 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6A00 0%, #FF8A3D 100%)',
        'gradient-green': 'linear-gradient(135deg, #28A745 0%, #0F7A57 100%)',
      },
    },
  },
  plugins: [],
};
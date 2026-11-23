/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070A10',
          navy: '#0D131F',
          surface: '#131B2B',
          'surface-elevated': '#1B263B',
          border: '#233047',
          'border-light': '#2F4060',
          orange: {
            DEFAULT: '#FF5E14',
            hover: '#E64B04',
            light: '#FFA07A',
            50: '#FFF7ED',
            100: '#FFEDD5',
            400: '#FB923C',
            500: '#FF5E14',
            600: '#EA4C05',
            700: '#C23700',
          },
          silver: '#94A3B8',
          platinum: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 94, 20, 0.45)',
        'luxury-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};

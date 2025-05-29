/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10A37F',
        background: '#FFFFFF',
        messageBg: '#F7F7F8',
        textColor: '#202123',
        secondaryText: '#40414F',
        success: '#34D399',
        warning: '#FBBF24',
        error: '#F87171',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'chat': '0 2px 6px rgba(0,0,0,0.1)',
      },
      maxWidth: {
        'chat': '768px',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};
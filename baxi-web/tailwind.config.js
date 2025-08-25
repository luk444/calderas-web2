/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF6FF',
          100: '#D9EAFF',
          200: '#BCD9FF',
          300: '#8EC2FF',
          400: '#58A2FF',
          500: '#2E85FF',
          600: '#0A74DA',
          700: '#0757A8',
          800: '#0A4A82',
          900: '#0F3F6B',
        },
        accent: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#FF5722',
          600: '#E53E3E',
          700: '#C53030',
          800: '#9B2C2C',
          900: '#742A2A',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F6F7F9',
          200: '#ECEEF2',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7380',
          600: '#3A4048',
          700: '#2A2E34',
          800: '#1C1E22',
          900: '#0E0E10',
        },
        success: {
          50: '#F0FDF4',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#EFF6FF',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'carousel': 'carousel 20s linear infinite',
        'shimmer': 'shimmer 1.4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 28px rgba(0,0,0,0.10)',
        'navbar': '0 4px 20px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse at center, rgba(10, 116, 218, 0.9) 0%, rgba(7, 87, 168, 1) 100%)',
        'gradient-urgent': 'linear-gradient(45deg, rgba(255, 87, 34, 0.9) 0%, rgba(10, 116, 218, 0.9) 100%)',
      },
    },
  },
  plugins: [],
}

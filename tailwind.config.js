/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-white',
    'text-white',
    'bg-surface-muted',
    'bg-surface-hover',
    'bg-surface-active',
    'text-text-primary',
    'text-text-secondary',
    'border-border-light',
    'border-border-medium',
    'hover:bg-surface-hover',
    'active:bg-surface-active',
    'hover:text-text-primary',
    'focus:ring-2',
    'focus:ring-blue-200',
    'focus:ring-blue-200/50',
    'ring-2',
    'ring-blue-200',
    'ring-blue-200/50'
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#e9f2ff',
          100: '#c7dbff',
          200: '#a1c0ff',
          300: '#7aa5ff',
          400: '#5a8afc',
          500: '#1A73E8', // Main primary color
          600: '#0d5dcc',
          700: '#0147b0',
          800: '#003594',
          900: '#002878',
        },
        secondary: {
          50: '#fff0f0',
          100: '#ffe0de',
          200: '#ffc2bd',
          300: '#ffa59d',
          400: '#fd897e',
          500: '#FA7268', // Main secondary color
          600: '#e55b52',
          700: '#cc443b',
          800: '#b33029',
          900: '#991c1b',
        },
        // Interface colors
        background: {
          light: '#ffffff',
          dark: '#1f2937',
          muted: '#f9fafb',
        },
        surface: {
          DEFAULT: '#ffffff',
          hover: '#f9fafb',
          active: '#f3f4f6',
          muted: '#f3f4f6',
        },
        border: {
          light: '#e5e7eb',
          medium: '#d1d5db',
          dark: '#9ca3af',
        },
        text: {
          primary: '#1f2937',
          secondary: '#4b5563',
          muted: '#6b7280',
          light: '#9ca3af',
          inverse: '#ffffff',
        },
        // Semantic colors
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
        // Base colors 
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        sans: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
        serif: [
          'Playfair Display', 
          'ui-serif', 
          'Georgia', 
          'Cambria', 
          'Times New Roman', 
          'Times', 
          'serif'
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
  corePlugins: {
    ringOpacity: true, // Ensure ring opacity is enabled
  },
}
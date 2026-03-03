/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors mapping to CSS variables
        primary: 'var(--accent)',
        secondary: 'var(--success)',
        accent: 'var(--accent)',
        danger: 'var(--danger)',
        gray: 'var(--text1)',
        dark: {
          DEFAULT: 'var(--bg0)',
          700: 'var(--bg1)',
          800: 'var(--panel)',
          900: 'var(--bg0)',
        },
        light: 'var(--text0)',
        'light-300': 'var(--text1)',
        'light-400': 'var(--text1)',
        'light-500': 'var(--text1)',
      },
      textColor: {
        DEFAULT: 'var(--text0)',
        primary: 'var(--accent)',
        secondary: 'var(--success)',
        accent: 'var(--accent)',
        dark: 'var(--bg0)',
        light: 'var(--text0)',
        'light-300': 'var(--text1)',
        'light-400': 'var(--text1)',
        'light-500': 'var(--text1)',
      },
      backgroundColor: {
        DEFAULT: 'var(--bg0)',
        primary: 'var(--accent)',
        secondary: 'var(--success)',
        accent: 'var(--accent)',
        dark: 'var(--bg0)',
        'dark-700': 'var(--bg1)',
        'dark-800': 'var(--panel)',
        'dark-900': 'var(--bg0)',
        light: 'var(--text0)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        accent: 'var(--accent)',
        dark: 'var(--border)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow)',
        lg: 'var(--shadow)',
        xl: 'var(--shadow)',
        '3xl': 'var(--shadow)',
      },
      outlineColor: {
        DEFAULT: 'var(--focus)',
      },
      ringColor: {
        DEFAULT: 'var(--focus)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

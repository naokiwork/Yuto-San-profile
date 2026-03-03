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
        secondary: 'var(--link)',
        accent: 'var(--accent)',
        bg0: 'var(--bg0)',
        bg1: 'var(--bg1)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        text0: 'var(--text0)',
        text1: 'var(--text1)',
        link: 'var(--link)',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        // Custom clamp for very large headings
        'hero-clamp': 'clamp(3rem, 7vw, 5.5rem)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'section-mobile': '40px',
        'section-desktop': '80px',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        full: '9999px',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow)',
        lg: 'var(--shadow)',
        xl: 'var(--shadow)',
        '2xl': 'var(--shadow)',
        '3xl': 'var(--shadow)',
        'sm-light': 'var(--shadow2)',
      },
    },
  },
  plugins: [],
};

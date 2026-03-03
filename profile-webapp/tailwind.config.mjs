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
        danger: 'var(--danger)',
        gray: 'var(--text1)',
        bg0: 'var(--bg0)',
        bg1: 'var(--bg1)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        text0: 'var(--text0)',
        text1: 'var(--text1)',
        link: 'var(--link)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        DEFAULT: 'var(--radius)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow)',
        lg: 'var(--shadow)',
        xl: 'var(--shadow)',
        '3xl': 'var(--shadow)',
      },
      // Direct use of CSS variables for properties not easily mapped
      // These will be used with arbitrary values like `bg-[var(--panel)]`
    },
  },
  plugins: [],
};

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
        background: 'var(--bg)',
        foreground: 'var(--fg)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: 'var(--card)',
        accent: 'var(--accent)',
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
        'display': 'clamp(2.5rem, 6vw, 5rem)',
        'h1': 'clamp(2rem, 5vw, 4rem)',
        'h2': 'clamp(1.75rem, 4vw, 3rem)',
        'h3': 'clamp(1.5rem, 3vw, 2.5rem)',
        'body': '1.125rem',
        'small': '0.9375rem',
        'micro': '0.75rem',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
        '96': '24rem',
        'section-mobile': '3rem',
        'section-desktop': '6rem',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        full: '9999px',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
        sm: 'var(--shadow2)',
      },
      maxWidth: {
        'prose': '78ch',
        '6xl': '72rem',
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};

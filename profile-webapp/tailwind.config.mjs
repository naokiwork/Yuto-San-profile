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
        'muted-2': 'var(--muted-2)',
        border: 'var(--border)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        link: 'var(--link)',
        'accent-contrast': 'var(--accent-contrast)', // For text on accent background
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
        'display': 'clamp(2.5rem, 6vw, 4.5rem)', // Adjust for Apple-like hero
        'h1': 'clamp(2.25rem, 5vw, 3.5rem)', // Main section titles
        'h2': 'clamp(1.75rem, 4vw, 2.75rem)', // Sub-section titles
        'h3': 'clamp(1.5rem, 3vw, 2.25rem)', // Card titles
        'body': '1.0625rem', // ~17px
        'small': '0.9375rem', // ~15px
        'caption': '0.75rem', // ~12px
      },
      spacing: {
        '1': 'var(--space-xs)',  // 4px
        '2': 'var(--space-sm)',   // 8px
        '3': 'var(--space-md)',  // 12px
        '4': 'var(--space-lg)',     // 16px
        '5': 'var(--space-xl)',  // 24px
        '6': 'var(--space-2xl)',     // 32px
        '7': 'var(--space-3xl)',  // 48px
        '8': 'var(--space-4xl)',     // 64px
        '9': 'var(--space-5xl)',   // 96px
        'section-mobile': '3rem',
        'section-desktop': '6rem',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: '9999px',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
        sm: 'var(--shadow2)',
      },
      maxWidth: {
        'prose': '72ch',
        'md-container': '768px',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      lineHeight: {
        'heading': 'var(--line-height-heading)',
        'body': 'var(--line-height-body)',
      },
  plugins: [],
};

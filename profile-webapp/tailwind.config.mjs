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
        github: {
          darkblue: '#0d1117',
          blue: '#1f6feb',
          green: '#2ea043',
          purple: '#8957e5',
          gray: '#c9d1d9',
          lightgray: '#f0f6fc',
        },
        // Custom colors for portfolio
        primary: '#6366f1', // Indigo 500
        secondary: '#4f46e5', // Indigo 600
        accent: '#fde047', // Yellow 300
        dark: '#1a202c', // Dark gray
        light: '#f7fafc', // Light gray
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
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

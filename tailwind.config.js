/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--color-background))',
        content: 'rgba(var(--color-content))',
        heading: 'rgba(var(--color-heading))',
        btn: {
          bg: 'rgba(var(--color-btn-bg))',
          text: 'rgba(var(--color-btn-text))',
        },
        accent: {
          1: 'rgba(var(--color-accent1))',
          2: 'rgba(var(--color-accent2))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        damion: ['var(--font-damion)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

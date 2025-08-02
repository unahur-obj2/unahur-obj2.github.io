/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'unahur': {
          'primary': '#1e40af',
          'secondary': '#1d4ed8',
          'accent': '#3b82f6',
          'light': '#dbeafe',
          'dark': '#1e3a8a',
          'primary-dark': '#3b82f6',
          'secondary-dark': '#2563eb',
          'accent-dark': '#60a5fa',
          'light-dark': '#1e3a8a',
        }
      },
      fontFamily: {
        'sans': ['OpenSans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}

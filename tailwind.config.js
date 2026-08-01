/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        panel: 'rgba(255,255,255,0.03)',
        ink: '#F5F3EE',
        dim: '#9C978C',
        gold: {
          DEFAULT: '#D4AF37',
          bright: '#F1D375',
          soft: 'rgba(212,175,55,0.10)',
          line: 'rgba(212,175,55,0.32)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(212,175,55,0.35), 0 18px 40px -20px rgba(212,175,55,0.35)',
        goldLg: '0 0 40px -6px rgba(212,175,55,0.45)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0B0B0F',
          raised: '#15151B',
          subtle: '#1C1C24',
          border: 'rgba(255,255,255,0.08)',
        },
        brand: {
          red: {
            50: '#FFF1F1',
            100: '#FFDFDF',
            200: '#FFC5C5',
            300: '#FF9A9A',
            400: '#FF6B6B',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#7F1D1D',
            900: '#450A0A',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 0 1px rgba(239,68,68,0.18), 0 8px 30px -8px rgba(239,68,68,0.35)',
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(80% 60% at 50% 0%, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0) 60%)',
        'grain':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};

// filepath: c:\Users\Nicol\Desktop\Software\house_view\tailwind.config.js

function cssVarRgb(name) {
  return ({ opacityValue }) =>
    opacityValue ? `rgb(var(${name}) / ${opacityValue})` : `rgb(var(${name}))`;
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geologica': ['Geologica', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Existing palette
        cavern: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        primary: cssVarRgb('--color-primary'),
        'primary-700': cssVarRgb('--color-primary-700'),
        accent: cssVarRgb('--color-accent'),
        bg: cssVarRgb('--color-bg'),
        surface: cssVarRgb('--color-surface'),
        text: cssVarRgb('--color-text'),
        muted: cssVarRgb('--color-muted'),

        // New palettes using CSS variables
        amber: {
          50: cssVarRgb('--color-amber-50'),
          100: cssVarRgb('--color-amber-100'),
          200: cssVarRgb('--color-amber-200'),
          300: cssVarRgb('--color-amber-300'),
          400: cssVarRgb('--color-amber-400'),
          500: cssVarRgb('--color-amber-500'),
          600: cssVarRgb('--color-amber-600'),
          700: cssVarRgb('--color-amber-700'),
          800: cssVarRgb('--color-amber-800'),
          900: cssVarRgb('--color-amber-900'),
        },
        teal: {
          50: cssVarRgb('--color-teal-50'),
          100: cssVarRgb('--color-teal-100'),
          200: cssVarRgb('--color-teal-200'),
          300: cssVarRgb('--color-teal-300'),
          400: cssVarRgb('--color-teal-400'),
          500: cssVarRgb('--color-teal-500'),
          600: cssVarRgb('--color-teal-600'),
          700: cssVarRgb('--color-teal-700'),
          800: cssVarRgb('--color-teal-800'),
          900: cssVarRgb('--color-teal-900'),
        },
        sky: {
          50: cssVarRgb('--color-sky-50'),
          100: cssVarRgb('--color-sky-100'),
          200: cssVarRgb('--color-sky-200'),
          300: cssVarRgb('--color-sky-300'),
          400: cssVarRgb('--color-sky-400'),
          500: cssVarRgb('--color-sky-500'),
          600: cssVarRgb('--color-sky-600'),
          700: cssVarRgb('--color-sky-700'),
          800: cssVarRgb('--color-sky-800'),
          900: cssVarRgb('--color-sky-900'),
        },
        indigo: {
          50: cssVarRgb('--color-indigo-50'),
          100: cssVarRgb('--color-indigo-100'),
          200: cssVarRgb('--color-indigo-200'),
          300: cssVarRgb('--color-indigo-300'),
          400: cssVarRgb('--color-indigo-400'),
          500: cssVarRgb('--color-indigo-500'),
          600: cssVarRgb('--color-indigo-600'),
          700: cssVarRgb('--color-indigo-700'),
          800: cssVarRgb('--color-indigo-800'),
          900: cssVarRgb('--color-indigo-900'),
        },
        neutral: {
          50: cssVarRgb('--color-neutral-50'),
          100: cssVarRgb('--color-neutral-100'),
          200: cssVarRgb('--color-neutral-200'),
          300: cssVarRgb('--color-neutral-300'),
          400: cssVarRgb('--color-neutral-400'),
          500: cssVarRgb('--color-neutral-500'),
          600: cssVarRgb('--color-neutral-600'),
          700: cssVarRgb('--color-neutral-700'),
          800: cssVarRgb('--color-neutral-800'),
          900: cssVarRgb('--color-neutral-900'),
        },

        // Aliases for legacy color names
        emerald: cssVarRgb('--color-teal-500'),
        cyan: cssVarRgb('--color-sky-500'),
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'wave-flow-slow': 'wave-flow-slow 80s linear infinite',
        'wave-flow-fast': 'wave-flow-fast 55s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'wave-flow-slow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'wave-flow-fast': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  plugins: [],
};
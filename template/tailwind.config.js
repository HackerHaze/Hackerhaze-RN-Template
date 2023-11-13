/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            a: {
              color: theme('colors.blue.100'),
              '&:hover': {
                color: theme('colors.blue.100'),
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.gray.300'),
              fontFamily: theme('fontFamily.inter').join(','),
              fontWeight: '700',
              fontSize: theme('fontSize.3xl'),
            },
            p: {
              color: theme('colors.gray.400'),
              fontFamily: theme('fontFamily.inter').join(','),
              fontSize: theme('fontSize.base'),
            },
            h2: {
              color: theme('colors.gray.300'),
              fontFamily: theme('fontFamily.inter').join(','),
              fontWeight: '700',
              fontSize: theme('fontSize.xl'),
            },
            h3: {
              color: theme('colors.gray.300'),
              fontFamily: theme('fontFamily.inter').join(','),
              fontWeight: '600',
              fontSize: theme('fontSize.4xl'),
            },
            'ol, ul': {
              color: theme('colors.gray.400'),
            },
            'ol > li::before': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: {
              color: theme('colors.gray.300'),
              fontWeight: theme('fontWeight.900'),
            },
            blockquote: {
              color: theme('colors.gray.600'),
              borderLeftColor: theme('colors.gray.400'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
          },
        },
      }),

      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        orange: {
          100: '#da7b33',
        },
        blue: {
          100: '#0284c7',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': [
          'var(--font-architects-daughter)',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        10: '2.5rem',
      },
      scale: {
        98: '.98',
      },
      fontWeight: {
        900: '900',
      },
    },
  },
  plugins: [],
};

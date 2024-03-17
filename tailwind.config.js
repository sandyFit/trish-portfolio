/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textLight: '#36332d',
        skyIce: {
          100: '#b8b9fc',
          200: '#8d8ffc',
          300: '#7c5dec',
          400: '#6148bd',
          500: '#5540a3',
          600: '#4c3896',
          700: '#38296e',
          800: '#291e52',
          900: '#1f1c40',
        },
        salmon: {
          300: '#fc7991',
          400: '#ff637f',
          500: '#fa4d6c',
          600: '#ad344a',
          700: '#802535',
          800: '#541823',
          900: '#2e0c12'
      },
        orangey: {
          300: '#fc686a',
          400: '#fb4b4e',
        },

        sunny: '#C2FF3F',

        dark: {
          800: '#151518'
        }

      },

      fontFamily: {
        grotesk: ['Familjen Grotesk', 'sans-serif'],
        inter: ["Inter Tight", 'sans-serif'],
        syne: ["Syne", 'sans-serif'],
        changa: ["Changa", 'sans-serif'],
        radio: ["Radio Canada", 'sans-serif'],
        noto: ["Noto Sans Display", 'sans-serif'],
        philo: ["Philosopher", 'sans-serif'],
        abee: ["ABeeZee", 'sans-serif'],
        mono: ["Space Mono", 'sans-serif'],
        playfair: ["Playfair", 'serif'],
        mono: ["Space Mono", 'sans-serif'],
        choris: ["Charis SIL", 'serif'],
        stick: ["Stick No Bills", 'sans-serif'],
        train: ["Train One", 'system-ui'],
        redres: ["Redressed", 'cursive'],
        manuale: ["Manuale", 'serif'],
        nova: ["Nova Round", 'system-ui'],
        metamorphous: ["Metamorphous", 'serif'],
        gugi: ["Gugi", 'sans-serif'],
        prosto: ["Prosto On", 'sans-serif'],
        arya: ["Arya", 'sans-serif'],
        chivo: ["Chivo Mono", 'monospace'],
        magra: ["Pragati Narrow", 'sans-serif'],
        sora: ["Sora", 'sans-serif'],

      },

      backgroundImage: {
        'circle-gradient': 'radial-gradient(circle, rgba(245,216,252,1) 0%, rgba(148,187,233,1) 100%);',
        'font-gradient': 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)'
      }
    },
  },
  plugins: [],
}




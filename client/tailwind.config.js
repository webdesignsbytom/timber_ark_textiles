/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        monts: ['Montserrat', 'sans-serif'],
        corgs: ['Courgette', 'sans-serif'],
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        'main-colour': '#',
        'nav-colour': '#',
        'footer-colour': '#',
        'colour-pale': '#',
        'colour-light': '#',
        'colour-med': '#',
        'colour-dark': '#',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'main-text': '#000000',
        'alt-text': '#ffffff',
        'hover-text': '#',
        'active-text': '#',
        'placeholder-text': 'rgb(55 65 81)',
        'error-red': '',
        'success-green': '',
        'event-red': '',
        'twitter-blue': '#1da1f2',
        'hyperlink-blue': '#2563eb',
        secleted: '#',
        'non-selected': '#',
      },
      gridTemplateRows: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        even: '1fr 1fr 1fr',
        one: '1fr',
        special: 'auto 1fr 0.5fr',
        ls: '1fr 0.4fr',
        a1a: 'auto 1fr auto',
        aa: 'auto auto',
        '3x': '3fr 1fr',
        item: '50px 1fr',
        'ten-one': '10fr 1fr',
      },
      gridTemplateColumns: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        even: '1fr 1fr 1fr',
        one: '1fr',
        xo: '1fr 0.6fr',
        a1a: 'auto 1fr auto',
        '1a1': '1fr auto 1fr',
        aa: 'auto auto',
        faf: '1fr 0.5fr 1fr',
        '1p1': '1fr 30px 1fr',
        '2a': '2fr 1fr auto',
        '3a': '1fr 1fr 0.7fr auto',
        '3x': '3fr 1fr',
        item: '50px 1fr',
      },
      width: {
        id: '12ch;',
      },
      fontSize: {
        ss: '0.5rem',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

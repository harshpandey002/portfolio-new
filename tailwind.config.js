/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bg: '#111',
        card: '#191919',
        'card-hover': '#1e1e1e',
        'card-border': '#242424',
        'border-dark': '#212121',
        'border-btn': '#2f2f2f',
        'border-btn-alt': '#363636',
        'text-primary': '#dddddd',
        'text-heading': '#eaeaea',
        'text-muted': '#a5a5a5',
        'text-body': '#b1b1b1',
        'text-dim': '#adadad',
        'text-meta': '#6c6c6c',
        'text-org': '#d9d9d9',
        'text-detail': '#bababa',
        'hover-social': '#343434',
        'hover-nav': '#292929',
        'hover-btn': '#2c2c2c',
        'hover-btn-alt': '#272727',
        'nav-mobile-bg': '#cacaca',
        'nav-mobile-text': '#303030',
        'freelance': 'rgb(61, 61, 61)',
        'link-hover': 'rgb(108, 68, 201)',
        'btn-bg': '#242424',
        'news-bg': '#121c2dce',
        'news-border': '#4f71ad',
        'footer-border': '#353535',
        'tag-bg': '#1e1e1e',
      },
      screens: {
        'mobile': { max: '800px' },
        'tablet': { max: '900px' },
      },
      maxWidth: {
        layout: '880px',
      },
      borderRadius: {
        card: '8px',
        btn: '6px',
        img: '16px',
        pill: '30px',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(270deg, #1a79d7 0%, #bc72de 33.65%, #cb4b73 62.81%, #cc9e07 100%)',
      },
    },
  },
  plugins: [],
};

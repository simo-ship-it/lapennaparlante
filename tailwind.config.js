/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'verde-medio': '#C6C0AC',
        'verde-scuro': '#C6C0AC',
        'mybaige': '#EBE1D3',
        'mydarkgreen': '#151E15'
      },

      backgroundImage: theme => ({
                 'home': "url('images/home.jpg')"
                })
    },
  },
  plugins: [],
}


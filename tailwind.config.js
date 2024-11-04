/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sora": ['sora', 'sans-serif']
      },

      colors: {
        special: {
          50: '#e879f9',
          500: '#9538E2',
          900: '#701a75',
        },
      },


    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}


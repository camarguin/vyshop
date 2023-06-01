/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        myBlue600: '#0d1422',
        myBlue500: '#223455',
        myBlue400: '#53799B',
        myBlue300: '#B2D8DB',
      },
      fontFamily: {
        italiana: ['var(--font-italiana)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
}

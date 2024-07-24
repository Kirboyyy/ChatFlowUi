/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#121212',
          secondary: '#1E1E1E',
          tertiary: '#252525',
        },
        code: '#1A1A1A',
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          tertiary: '#7E7E7E',
        },
        accent: {
          primary: '#BB86FC',
          secondary: '#03DAC6',
        },
        error: '#CF6679',
        border: {
          primary: '#333333',
          secondary: '#444444',
        },
        button: {
          primary: {
            background: '#6200EE',
            text: '#FFFFFF',
          },
          secondary: {
            background: '#03DAC6',
            text: '#121212',
          },
        },
      },
    },
  },
  plugins: [],
}


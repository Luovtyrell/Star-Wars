import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFC500',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}


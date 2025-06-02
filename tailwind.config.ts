import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bgWhite': 'rgba(255,255,255, 0.3)',
        'blueDark': '#023e8a',
        'blueDarkSemiLight': '#0077B6',
        'blueSemiLight': '#0096C7',
        'semiCyan': '#3fb1c9',
        'cyan': '#90E0EF',
        'bgPages': '#4B5563',
        porcelain: "#F2F2F2",
        golden: "#F4C107",
        sunset: "#FF5852",
        mediumGray: "#7D7D7D",
        whiteSmoke: "#F5F4F7",
        whiteLilia: "#F7F6F9",
        azure: "#2196F3",
        gainsboro: "#DFDFDF"
      },
      boxShadow: {
        notifications: '0 6px 12px 0 rgba(0, 0, 0, 0.05)',
        golden: '0 6px 12px 0 #F4C107',
        profile: '0 23px 23px 0 rgba(0, 0, 0, 0.04)',
        cards: "0 23px 23px 0 rgba(0, 0, 0, 0.01)",
        hoverCards: "0 29px 29px 0 rgba(0, 0, 0, 0.03)",
        icons: "0 1px 1px 0 rgba(0, 0, 0, 0.04)"
      }
    }
  },
  plugins: [
    require('autoprefixer')
  ],

  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./nuxt.config.{js,ts}"
  ]
}
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
        gainsboro: "#DFDFDF",
        mercury: "#E5E5E5",
        darkJungle: "#1E1E1E",
        redOrange: "#F44336"
      },
      boxShadow: {
        notifications: '0 6px 12px 0 rgba(0, 0, 0, 0.05)',
        golden: '0 6px 12px 0 #F4C107',
        profile: '0 23px 23px 0 rgba(0, 0, 0, 0.04)',
        cards: "0 23px 23px 0 rgba(0, 0, 0, 0.01)",
        profileCard: "0 6px 13px 0 rgba(0, 0, 0, 0.01), 0 23px 23px 0 rgba(0, 0, 0, 0.01), 0 52px 31px 0 rgba(0, 0, 0, 0.01), 0 92px 37px 0 rgba(0, 0, 0, 0), 0 144px 40px 0 rgba(0, 0, 0, 0)",
        hoverCards: "0 29px 29px 0 rgba(0, 0, 0, 0.03)",
        icons: "0 1px 1px 0 rgba(0, 0, 0, 0.04)",
        chat: "0 7px 16px 0 rgba(0, 0, 0, 0.01), 0 29px 29px 0 rgba(0, 0, 0, 0.01), 0 66px 40px 0 rgba(0, 0, 0, 0.01), 0 118px 47px 0 rgba(0, 0, 0, 0), 0 184px 51px 0 rgba(0, 0, 0, 0)",
        departmentInfo: "0 6px 13px 0 rgba(0, 0, 0, 0.01), 0 23px 23px 0 rgba(0, 0, 0, 0.01)",
        departmentCard: "0 7px 16px 0 rgba(0, 0, 0, 0.03), 0 66px 39px 0 rgba(0, 0, 0, 0.02), 0 117px 47px 0 rgba(0, 0, 0, 0), 0 182px 51px 0 rgba(0, 0, 0, 0)",
        object: "0 1px 2px 0px rgba(0, 0, 0, 0.02), 0 4px 4px 0px rgba(0, 0, 0, 0.02), 0 8px 5px 0px rgba(0, 0, 0, 0.01), 0 15px 6px 0px rgba(0, 0, 0, 0), 0 23px 7px 0px rgba(0, 0, 0, 0)",
        objectDescription: "0 6px 13px 0px rgba(0, 0, 0, 0.01), 0 23px 23px 0px rgba(0, 0, 0, 0.01), 0 52px 31px 0px rgba(0, 0, 0, 0.01), 0 92px 37px 0px rgba(0, 0, 0, 0), 0 144px 40px 0px rgba(0, 0, 0, 0)"
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
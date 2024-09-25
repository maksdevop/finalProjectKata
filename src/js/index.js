import '../scss/style.scss'
import swiper from './swiper.js'
import menu from './toggleMenu.js'
import button from './button.js'

document.addEventListener('DOMContentLoaded', () => {
  swiper.init()
  button.init()
  menu.init()
})

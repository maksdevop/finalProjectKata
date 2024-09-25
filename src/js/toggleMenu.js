const menu = document.querySelector('.container-aside')
const container = document.querySelector('.container')
const overlay = document.querySelector('.overlay')
const closeMenuBtn = document.querySelector('.side__close')
const openMenuButton = document.querySelector('.header__icon-burger')
const openMenuMessageBtn = document.querySelectorAll('.btn-open-feedback')
const menuFeedback = document.querySelector('.feedback')
const closeMenuFeedbackBtn = document.querySelector('.feedback__btn')
const menuCallback = document.querySelector('.callback')
const openMenuCallbackBtn = document.querySelectorAll('.btn-open-callback')
const closeMenuCallbackBtn = document.querySelector('.callback__btn')

function openMenuCallback() {
  menuCallback.style.display = 'block'
  container.classList.add('blurred')
  overlay.style.display = 'block'
  menu.classList.remove('container-aside__visible')
}

function closeMenuCallback() {
  menuCallback.style.display = 'none'
  container.classList.remove('blurred')
  overlay.style.display = 'none'
}

function closeMenuFeedback() {
  menuFeedback.style.display = 'none'
  container.classList.remove('blurred')
  overlay.style.display = 'none'
}

function openMenuFeedback() {
  menuFeedback.style.display = 'block'
  container.classList.add('blurred')
  overlay.style.display = 'block'
  menu.classList.remove('container-aside__visible')
}

function openMenu() {
  menu.classList.add('container-aside__visible')
  container.classList.add('blurred')
  overlay.style.display = 'block'
}

function closeMenu() {
  menu.classList.remove('container-aside__visible')
  container.classList.remove('blurred')
  overlay.style.display = 'none'
  menuFeedback.style.display = 'none'
  menuCallback.style.display = 'none'
}

closeMenuBtn.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)
openMenuButton.addEventListener('click', openMenu)

openMenuMessageBtn.forEach((btn) => {
  btn.addEventListener('click', openMenuFeedback)
})

closeMenuFeedbackBtn.addEventListener('click', closeMenuFeedback)

openMenuCallbackBtn.forEach((btn) => {
  btn.addEventListener('click', openMenuCallback)
})

closeMenuCallbackBtn.addEventListener('click', closeMenuCallback)

export default menu

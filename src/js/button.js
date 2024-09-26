const cards = document.querySelectorAll('.card')
const toggleBrand = document.querySelector('.expand-brand')
const toggleRepair = document.querySelector('.expand-repair')
const expandImgBrand = document.querySelector('.expand-brand__img')
const expandTextBrand = document.querySelector('.expand-brand__text')
const expandImgRepair = document.querySelector('.expand-repair__img')
const expandTextRepair = document.querySelector('.expand-repair__text')
const activeLi = document.querySelectorAll('.side__menu-item')
const activeLink = document.querySelectorAll('.service-nav__link')
const activeLang = document.querySelectorAll('.languages__item')

function addActiveLang() {
  activeLang.forEach((el) => el.classList.remove('active-grey'))
  this.classList.add('active-grey')
}

function addActiveLi() {
  activeLi.forEach((el) => el.classList.remove('side__menu_active'))
  this.classList.add('side__menu_active')
}

function addActiveLink() {
  activeLink.forEach((el) => el.classList.remove('active'))
  this.classList.add('active')
}

function swapBrands() {
  cards.forEach((card) => {
    if (card.classList.contains('card__swap')) {
      card.classList.toggle('card__hidden')
    }
    if (window.matchMedia('(max-width: 768px)').matches) {
      if (card.classList.contains('card__swap-768')) {
        card.classList.toggle('card__hidden-768')
      }
    }
  })

  if (expandTextBrand.innerHTML === 'Показать все') {
    expandTextBrand.innerHTML = 'Скрыть'
    expandImgBrand.src = './img/expand-up.svg'
  } else {
    expandTextBrand.innerHTML = 'Показать все'
    expandImgBrand.src = './img/expand.svg'
  }
}

function swapRepair() {
  cards.forEach((card) => {
    if (window.matchMedia('(max-width: 1440px)').matches) {
      if (card.classList.contains('card-repair__hidden')) {
        card.classList.toggle('card-repair__hidden-768')
      }
    }
  })

  if (expandTextRepair.innerHTML === 'Показать все') {
    expandTextRepair.innerHTML = 'Скрыть'
    expandImgRepair.src = './img/expand-up.svg'
  } else {
    expandTextRepair.innerHTML = 'Показать все'
    expandImgRepair.src = './img/expand.svg'
  }
}

toggleBrand.addEventListener('click', swapBrands)
toggleRepair.addEventListener('click', swapRepair)
activeLi.forEach((item) => {
  item.addEventListener('click', addActiveLi)
})

activeLink.forEach((item) => {
  item.addEventListener('click', addActiveLink)
})

activeLang.forEach((item) => {
  item.addEventListener('click', addActiveLang)
})

export default button

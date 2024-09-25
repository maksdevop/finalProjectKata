const cards = document.querySelectorAll('.card')
const toggleBrand = document.querySelector('.expand-brand')
const toggleRepair = document.querySelector('.expand-repair')
const expandImgBrand = document.querySelector('.expand__img-brand')
const expandTextBrand = document.querySelector('.expand__text-brand')
const expandImgRepair = document.querySelector('.expand__img-repair')
const expandTextRepair = document.querySelector('.expand__text-repair')
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

export default button

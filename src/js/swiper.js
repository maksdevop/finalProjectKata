let swiper;
const initSwiperBrand = () => {
    swiper = new Swiper('.swiper-brand', {
        direction: 'horizontal',

        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};

const initSwiperRepair = () => {
    swiper = new Swiper('.swiper-repair', {
        direction: 'horizontal',

        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};

const initSwiperPrice = () => {
    swiper = new Swiper('.swiper-price', {
        direction: 'horizontal',

        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};

const destroySwiper = () => {
    if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
};

const handleResize = () => {
    const cardsContainer = document.querySelectorAll('.cards');
    const cards = document.querySelectorAll('.card');

    if (cardsContainer && cards.length > 0) {
        if (window.innerWidth <= 767) {
            if (!swiper) {
                cardsContainer.forEach((cardContainer) => {
                    cardContainer.classList.add('swiper-wrapper');
                });
                cards.forEach((card) => {
                    card.classList.add('swiper-slide');
                });
                initSwiperBrand();
                initSwiperRepair();
                initSwiperPrice();
            }
        } else {
            if (swiper) {
                destroySwiper();
                cardsContainer.forEach((cardContainer) => {
                    cardContainer.classList.remove('swiper-wrapper');
                });
                cards.forEach((card) => {
                    card.classList.remove('swiper-slide');
                });
            }
        }
    }
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);


export default swiper;
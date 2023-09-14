var swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerVieW: 3,
            spaceBetween: 20,
        },
    },
});
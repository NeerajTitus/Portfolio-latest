

const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    spaceBetween: 118,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    pauseOnMouseEnter: true,
    loop: true,
    slidesPerView: 10, // Lowered to avoid loop warning
    allowTouchMove: false,
});
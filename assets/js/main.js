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

// Banner text active class rotation
function rotateActiveClass() {
    const bannerText = document.querySelector('.banner__content-text');
    if (!bannerText) return;

    const spans = bannerText.querySelectorAll('span');
    if (spans.length === 0) return;

    let currentIndex = 0;

    // Find current active span index
    spans.forEach((span, index) => {
        if (span.classList.contains('active')) {
            currentIndex = index;
        }
    });

    // Remove active class from all spans
    spans.forEach(span => span.classList.remove('active'));

    // Add active class to next span (cycle back to first if at end)
    currentIndex = (currentIndex + 1) % spans.length;
    spans[currentIndex].classList.add('active');
}

// Start rotation every 5 seconds
setInterval(rotateActiveClass, 5000);


//adding a class active to header when scrolling to the section
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Magnetic button using gsap
// Grab all buttons with class "btn"
const btns = document.querySelectorAll(".btn");

// Strength of magnetic pull
const strength = 150;

document.addEventListener("mousemove", (e) => {
    btns.forEach((btn) => {
        const rect = btn.getBoundingClientRect();

        // Find the center of the button
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;

        // Distance from mouse to button center
        const distX = e.clientX - btnX;
        const distY = e.clientY - btnY;

        // Total distance
        const distance = Math.sqrt(distX * distX + distY * distY);

        // Animate with GSAP
        if (distance < strength) {
            gsap.to(btn, {
                x: distX * 0.2,
                y: distY * 0.2,
                duration: 0.2,
                ease: "power2.out",
            });
        } else {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.4)",
            });
        }
    });
});
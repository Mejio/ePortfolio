// Carousel for project screenshots
let currentSlide = {};
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll('img');
    const totalSlides = slides.length;

    let carouselId = carousel.classList.contains('project1-carousel') ? 'project1-carousel' : 'default-carousel';

    currentSlide[carouselId] = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove 'active' class from all images
            if (i === index) {
                slide.classList.add('active'); // Add 'active' class to the current image
            }
        });
    }

    showSlide(currentSlide[carouselId]);

    carousel.querySelector('.prevSlide').addEventListener('click', () => {
        currentSlide[carouselId] = (currentSlide[carouselId] - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide[carouselId]);
    });

    carousel.querySelector('.nextSlide').addEventListener('click', () => {
        currentSlide[carouselId] = (currentSlide[carouselId] + 1) % totalSlides;
        showSlide(currentSlide[carouselId]);
    });
});


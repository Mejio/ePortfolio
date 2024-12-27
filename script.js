// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight the current section in the navigation while scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Pop-up modal for contact confirmation
const contactModal = document.createElement('div');
contactModal.id = 'contactModal';
contactModal.style.display = 'none';
contactModal.style.position = 'fixed';
contactModal.style.top = '50%';
contactModal.style.left = '50%';
contactModal.style.transform = 'translate(-50%, -50%)';
contactModal.style.padding = '20px';
contactModal.style.backgroundColor = 'white';
contactModal.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
contactModal.style.zIndex = '1000';
contactModal.innerHTML = `
    <p>Thank you for reaching out! I will get back to you soon.</p>
    <button id="closeModal" style="padding: 10px; background-color: #007BFF; color: white; border: none; cursor: pointer;">Close</button>
`;
document.body.appendChild(contactModal);

document.querySelector('#contact form').addEventListener('submit', function (e) {
    e.preventDefault();
    contactModal.style.display = 'block';
});

// Close modal
document.querySelector('#closeModal').addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Carousel for project screenshots
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('#prevSlide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('#nextSlide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

// Initialize carousel
if (slides.length > 0) {
    showSlide(currentSlide);
}

// Form validation for the contact form
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const emailInput = this.querySelector('input[name="email"]');
        const messageInput = this.querySelector('textarea[name="message"]');

        if (!emailInput.value.includes('@') || messageInput.value.trim() === '') {
            e.preventDefault();
            alert('Please enter a valid email and message.');
        }
    });
}

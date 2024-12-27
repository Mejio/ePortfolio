document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    // Function to display the current image
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active'); // Remove 'active' from all images
            if (i === index) {
                img.classList.add('active'); // Add 'active' to the current image
            }
        });
    }

    // Show the first image initially
    showImage(currentIndex);

    // Next button functionality
    document.getElementById('nextSlide').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    // Previous button functionality
    document.getElementById('prevSlide').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });
});

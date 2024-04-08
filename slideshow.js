document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slideshow-container img');
    var currentSlide = 0;

    function showSlide(n) {
        slides.forEach(function(slide) {
            slide.style.opacity = 0; // Hide all slides
        });
        slides[n].style.opacity = 1; // Show the current slide
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Automatically advance to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
});

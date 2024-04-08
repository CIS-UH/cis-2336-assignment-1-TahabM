document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slideshow-container img');
    var currentSlide = 0;

    function showSlide(n) {
        slides.forEach(function(slide) {
            slide.style.display = 'none';
        });
        slides[n].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
});

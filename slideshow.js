document.addEventListener("DOMContentLoaded", function() {
    // Sample slideshow images (replace with your actual images)
    var slideshowImages = [
        "slide1.jpg",
        "slide2.jpg",
        "slide3.jpg"
        // Add more images as needed
    ];

    // Get the slideshow container element
    var slideshowContainer = document.querySelector(".slideshow");

    // Loop through the slideshow images and create HTML elements to display them
    slideshowImages.forEach(function(imageSrc) {
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = "Slideshow Image";
        slideshowContainer.appendChild(imageElement);
    });
});

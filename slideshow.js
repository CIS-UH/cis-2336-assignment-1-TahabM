document.addEventListener("DOMContentLoaded", function() {
    var slideshowImages = [
        "slide1.jpg",
        "slide2.jpeg",
        "slide3.jpg"
    ];

    var slideshowContainer = document.querySelector(".slideshow");

    slideshowImages.forEach(function(imageSrc) {
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = "Slideshow Image";
        slideshowContainer.appendChild(imageElement);
    });
});

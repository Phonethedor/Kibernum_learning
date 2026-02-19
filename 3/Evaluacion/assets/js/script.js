// Initialize Bootstrap tooltips or other interactive elements if needed
document.addEventListener('DOMContentLoaded', function () {
    // Example: Add a console log to show script is running
    console.log('Street Bite script loaded - Vibes active!');

    // Select the carousel element
    var myCarousel = document.querySelector('#heroCarousel');
    // Initialize the carousel with options
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        wrap: true
    });
});

let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Initialize the slideshow
function showSlide(index) {
    // Ensure index loops back when out of bounds
    currentSlideIndex = (index + slides.length) % slides.length;

    // Hide all slides and deactivate dots
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });

    // Show the current slide and activate the corresponding dot
    slides[currentSlideIndex].classList.add("active");
    dots[currentSlideIndex].classList.add("active");
}

// Change to the next or previous slide
function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}

// Set a specific slide
function setSlide(index) {
    showSlide(index - 1); // Convert 1-based to 0-based index
}

// Auto-slide every 5 seconds
let autoSlideInterval = setInterval(() => changeSlide(1), 5000);

// Pause auto-slide on hover
const slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
slideshowContainer.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => changeSlide(1), 5000);
});

// Start with the first slide
showSlide(currentSlideIndex);

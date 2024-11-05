let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

// Show the initial slide
showSlide(currentIndex);

// Function to show the slide at a given index
function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    }
    // Translate the slides container to show the current slide
    document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Show the next slide
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

// Show the previous slide
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Auto-slide functionality
setInterval(() => {
    nextSlide();
}, 3000); // Change slide every 3 seconds

let reviews = document.querySelectorAll(".review");
let currentIndex = 0;

function showNextReview() {
    reviews[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].classList.add("active");
}

setInterval(showNextReview, 4000);

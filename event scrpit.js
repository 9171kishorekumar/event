document.querySelectorAll(".book-btn").forEach(button => {
    button.addEventListener("click", function() {
        let eventName = this.parentElement.getAttribute("data-event");
        alert(`You have selected "${eventName}". Redirecting to booking page...`);
        window.location.href = "booking.html";
    });
});

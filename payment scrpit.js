function showPaymentFields() {
    let paymentMethod = document.getElementById("payment-method").value;

    // Hide all sections first
    document.getElementById("upi-section").classList.add("hidden");
    document.getElementById("card-section").classList.add("hidden");
    document.getElementById("netbanking-section").classList.add("hidden");

    // Show relevant fields based on payment method
    if (paymentMethod === "UPI") {
        document.getElementById("upi-section").classList.remove("hidden");
    } else if (paymentMethod === "Card") {
        document.getElementById("card-section").classList.remove("hidden");
    } else if (paymentMethod === "NetBanking") {
        document.getElementById("netbanking-section").classList.remove("hidden");
    }
}

// Payment Processing
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;
    let paymentMethod = document.getElementById("payment-method").value;

    if (name && phone && email && amount && paymentMethod) {
        alert(`✅ Payment Successful via ${paymentMethod}!\n
        Name: ${name}
        Amount: ₹${amount}
        Payment Method: ${paymentMethod}`);
        window.location.href = "home.html";
    } else {
        alert("⚠️ Please fill all details!");
    }
});

// Populate the hours dropdown (1 to 12)
let hoursDropdown = document.getElementById("hours");
for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i < 10 ? "0" + i : i; 
    option.text = i;
    hoursDropdown.appendChild(option);
}

// Populate the minutes dropdown (00 to 59)
let minutesDropdown = document.getElementById("minutes");
for (let i = 0; i < 60; i += 5) { 
    let option = document.createElement("option");
    option.value = i < 10 ? "0" + i : i; 
    option.text = i < 10 ? "0" + i : i;
    minutesDropdown.appendChild(option);
}

// Booking form submission
document.getElementById("event-booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let eventName = document.getElementById("event-name").value;
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let ampm = document.getElementById("ampm").value;
    let location = document.getElementById("location").value;

    if (name && phone && email && eventName && hours && minutes && ampm && location) {
        let eventTime = `${hours}:${minutes} ${ampm}`;
        alert(`🎉 Booking Confirmed for ${eventName} at ${eventTime} in ${location}!`);
    } else {
        alert("⚠️ Please fill all details!");
    }
});

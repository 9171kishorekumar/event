// Function to show Sign-up form and hide Login form
function showSignUp() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
}

// Function to show Login form and hide Sign-up form
function showLogin() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

// Function to validate Login
function validateLogin() {
    let loginId = document.getElementById('login-id').value;
    let password = document.getElementById('login-password').value;

    if (loginId === "" || password === "") {
        alert("Please enter both Login ID and Password.");
    } else {
        alert("Login Successful!"); // You can replace this with actual authentication
    }
}

// Function to validate Sign-up
function validateSignUp() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('signup-phone').value;
    let email = document.getElementById('email').value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields.");
    } else if (!phone.match(/^\d{10}$/)) {
        alert("Please enter a valid 10-digit phone number.");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Sign Up Successful! You can now log in.");
        showLogin(); // Switch to login form after successful sign-up
    }
}



// Form
const form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email");

    if (validateEmail(email.value)) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return regex.test(email);
}

// for password

function checkPassword () {
    const password = document.getElementById("password")
    const string = document.getElementById("string")

    let  strength = 0;
    if(password.lang >= 8) strength ++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[a-z]/.test(password)) strength++;
    if(/[0-9]/.test(password))strength++;

    if(strength === 0) {
        string.textContent = "Write a Password"
        string.className = "strength"
    }
}
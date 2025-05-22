
let myLink = document.querySelector(".link")
let myLogo = document.querySelector(".logo")
let myName = document.getElementById("name")
let myHidden = document.querySelector(".hidden")
let myPassword = document.getElementById("password")
let mySing = document.querySelector(".sing")
let Email = document.getElementById("email")

// Form
const form = document.querySelector(".form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(myName.value === "" & Email.value === "" & myPassword.value === "") {
        alert("Please fill in all fields");
    }
    if (validateEmail(Email.value)) {
        window.location.href = "/src/dashboard.html";
    } else {
        document.getElementsByClassName('Error').classList.add('Error')
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
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

myLink.addEventListener("click" , function(e) {
    e.preventDefault();
    myLogo.textContent="Sing in"
    myHidden.classList.remove("hidden")
    mySing.style.display = "none"
    
})

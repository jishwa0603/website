var loginForm = document.getElementById("login");
var signupForm = document.getElementById("signup");
var btn = document.getElementById("btn");

function login() {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    btn.style.left = "0px";
}

function signup() {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    btn.style.left = "110px";
}

const form = document.querySelector(".content-right-sign-in form");
const inputEmail = document.querySelector(".content-right-sign-in form #input-email");
const inputPassword = document.querySelector(".content-right-sign-in form #input-password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputEmail.value || !inputPassword.value) {
        return;
    }
    window.location = "/pages/main/main.html"
});
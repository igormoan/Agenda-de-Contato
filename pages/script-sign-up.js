
const form = document.querySelector(".content-left form");

const inputName = document.querySelector(".content-left form #input-name-sign-up");
const inputEmail = document.querySelector(".content-left form #input-email-sign-up");
const inputPassword = document.querySelector(".content-left form #input-password-sign-up");
const btnLimpar = document.querySelector(".content-left form .btn-red");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputName.value || !inputEmail.value || !inputPassword.value) {
        return;
    }
    window.location = "/pages/sign_in.html"
});

btnLimpar.addEventListener("click", () => {
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
});


















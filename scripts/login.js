"use strict";

const loginBtn  = document.getElementById("login-credentials__button");

function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, "");
}

function checkCredentials() {
    let credentialsInput = document.getElementById("login-credentials__social-security-number").value;

    let correctCredentials = "0101011234";

    if (credentialsInput === correctCredentials) {
        window.location.href = "/pages/main.html";
    } else {
        alert("Fel personnummer. Försök igen.");
    }
};

loginBtn.addEventListener("click", () => {
    checkCredentials();
});
"use strict";

const backArrow = document.getElementById("back-arrow");

backArrow.addEventListener("click", () => {
    goBack();
});

function goBack() {
    window.history.back();
};
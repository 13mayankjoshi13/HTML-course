// ===== NAVBAR SHRINK ON SCROLL =====
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});


// ===== SMOOTH PAGE FADE-IN =====
document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


// ===== TYPING EFFECT =====
const text = "Discover the best food & drinks in Haldwani";
const paragraph = document.querySelector("main p");

let index = 0;
paragraph.textContent = "";

function typeEffect() {
    if (index < text.length) {
        paragraph.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 35);
    }
}

typeEffect();
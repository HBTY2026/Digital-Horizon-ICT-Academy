// =============================
// Digital Horizon ICT Academy
// Version 1.0
// =============================

console.log("Digital Horizon ICT Academy Loaded Successfully!");

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Digital Horizon ICT Academy!");
});

// Button Click Effect
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("This page is under development. Coming Soon!");
    });
});

// Hero Button
const heroButton = document.querySelector(".btn");

if(heroButton){
    heroButton.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".grades").scrollIntoView({
            behavior: "smooth"
        });
    });
}

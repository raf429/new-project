console.log("hello");
console.log(5 + 3);
let score = 0;
console.log(score);
score = 5;
console.log(score);
score = score = 6;
// ok
console.log(score);

const playerName = "Raphael";
const age = 17;
console.log(playerName);
console.log(age);
console.log(`${playerName} is ${age} years old.`);
const title = document.querySelector("#welcome");
title.textContent = "Welcome to my website!";

// Clock
function updateClock() {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

// Fun fact button
const factBtn = document.getElementById("factBtn");
const fact = document.getElementById("fact");

factBtn.addEventListener("click", () => {
    fact.style.display = fact.style.display === "none" ? "block" : "none";
});

// Dark mode button
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
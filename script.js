/* PASSWORD */
function checkPassword() {
const input = document.getElementById("password-input").value;
if (input === "10102025") {
document.getElementById("password-screen").style.display = "none";
document.getElementById("step1").classList.remove("hidden");
} else {
document.getElementById("error-msg").innerText = "Wrong date 💔";
}
}

/* STEP CONTROL */
function nextStep(stepNumber) {
const current = document.querySelector(".panel:not(.hidden)");
current.classList.add("hidden");
document.getElementById("step" + stepNumber).classList.remove("hidden");
}

/* GAME */
let score = 0;
let gameActive = true;

const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");

function createHeart() {
if (!gameActive) return;

const heart = document.createElement("div");
heart.innerText = "💖";
heart.classList.add("floating-heart");
heart.style.left = Math.random() * 90 + "%";

heart.onclick = () => {
if (!gameActive) return;

score++;
scoreDisplay.textContent = score;
heart.remove();

if (score === 10) {
endGame();
}
};

gameArea.appendChild(heart);
setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 800);

function endGame() {
gameActive = false;

setTimeout(() => {
alert("You collected enough love ❤️");

const gameSection = document.getElementById("step4");
gameSection.style.opacity = "0";

setTimeout(() => {
gameSection.classList.add("hidden");
document.getElementById("step5").classList.remove("hidden");
}, 800);

}, 300);
}

/* REDIRECT */
function goToProposal() {
window.location.href = "https://gamingninja24x7.github.io/valentine/";
}

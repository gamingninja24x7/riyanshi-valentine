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

/* LOVE BACKGROUND */
const loveContainer = document.getElementById("love-container");
const emojis = ["❤️","💖","💕","💘","💗","💓"];

function createLove() {
const love = document.createElement("div");
love.classList.add("love");
love.innerText = emojis[Math.floor(Math.random() * emojis.length)];
love.style.left = Math.random() * 100 + "vw";
love.style.animationDuration = (5 + Math.random() * 5) + "s";
loveContainer.appendChild(love);
setTimeout(() => love.remove(), 8000);
}

setInterval(createLove, 400);

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
score++;
scoreDisplay.textContent = score;
heart.remove();

if (score === 10) endGame();
};

gameArea.appendChild(heart);
setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 800);

function endGame() {
gameActive = false;

setTimeout(() => {
alert("You collected enough love❤️ baby just like you collected my heart.");

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

const music = document.getElementById("bgMusic");

function startMusic() {
if (music.paused) {
music.play().catch(error => {
console.log("Autoplay blocked:", error);
});
}
}

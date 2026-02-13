function checkPassword() {
const input = document.getElementById("password-input").value;
const errorMsg = document.getElementById("error-msg");

if (input === "10102025") {
document.getElementById("password-screen").style.display = "none";
document.getElementById("main-content").style.display = "block";
} else {
errorMsg.textContent = "Wrong date.";
}
}

function scrollNext() {
window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
}

/* Redirect to Proposal Page */
function goToProposal() {
document.body.innerHTML = `
<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:#fff5f7;
font-family:'Segoe UI',sans-serif;
text-align:center;">
<h1>Taking you somewhere important… 💘</h1>
<p>Because you matter that much.</p>
</div>
`;

setTimeout(() => {
window.location.href = "https://gamingninja24x7.github.io/valentine/";
}, 3000);
}

/* Floating Love Emojis */
const emojis = ["❤️","💕","💖","💘","💗","💓"];
const container = document.getElementById("love-container");

function createLove() {
const love = document.createElement("div");
love.classList.add("love");
love.innerText = emojis[Math.floor(Math.random() * emojis.length)];
love.style.left = Math.random() * 100 + "vw";
love.style.animationDuration = (5 + Math.random() * 5) + "s";
love.style.fontSize = (20 + Math.random() * 25) + "px";
container.appendChild(love);
setTimeout(() => { love.remove(); }, 10000);
}
setInterval(createLove, 300);

/* Mini Game */
let score = 0;
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

function createGameHeart() {
const heart = document.createElement("div");
heart.classList.add("floating-heart");
heart.innerText = "💖";
heart.style.left = Math.random() * 90 + "%";

heart.onclick = () => {
score++;
scoreDisplay.textContent = score;
heart.remove();
if (score === 10) {
alert("You collected enough love. Just like you collected my heart ❤️");
}
};

gameArea.appendChild(heart);
setTimeout(() => { heart.remove(); }, 4000);
}
setInterval(createGameHeart, 800);

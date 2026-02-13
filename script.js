let currentScore = 0;
let gameInterval;

function vibrate() {
if (navigator.vibrate) navigator.vibrate(40);
}

function playClick() {
document.getElementById("click-sound").play();
vibrate();
}

function checkPassword() {
playClick();
const pass = document.getElementById("password").value;
if(pass === "10102025") {
document.getElementById("unlock-sound").play();
showNext("date-section");
}
}

function showNext(id) {
document.querySelectorAll(".section").forEach(sec=>sec.classList.remove("active"));
document.getElementById(id).classList.add("active");
playClick();
}

function startGame() {
showNext("game-section");
currentScore = 0;
document.getElementById("score").innerText = currentScore;

gameInterval = setInterval(createHeart, 800);
}

function createHeart() {
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";
heart.style.left = Math.random()*90 + "%";

heart.onclick = function() {
currentScore++;
document.getElementById("score").innerText = currentScore;
heart.remove();

if(currentScore >= 10) {
clearInterval(gameInterval);
setTimeout(endGame, 500);
}
};

document.getElementById("game-area").appendChild(heart);

setTimeout(()=>heart.remove(),3000);
}

function endGame() {
document.getElementById("heartbeat-sound").play();
showNext("final-section");
}

function goToProposal() {
playClick();
setTimeout(()=>{
window.location.href="https://gamingninja24x7.github.io/valentine/";
},500);
}

/* BACKGROUND HEARTS */
function createBgHearts(){
const bg=document.getElementById("hearts-bg");
const heart=document.createElement("div");
heart.classList.add("bg-heart");
heart.innerHTML=["❤️","💖","💕","💘","💓"][Math.floor(Math.random()*5)];
heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(15+Math.random()*20)+"px";
bg.appendChild(heart);
setTimeout(()=>heart.remove(),8000);
}
setInterval(createBgHearts,500);

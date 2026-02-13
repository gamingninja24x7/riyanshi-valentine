const pages = document.querySelectorAll(".page");
const clickSound = document.getElementById("clickSound");

function vibrate() {
if (navigator.vibrate) navigator.vibrate(40);
}

function playClick() {
clickSound.currentTime = 0;
clickSound.play();
vibrate();
}

function showPage(id) {
pages.forEach(p => p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* PASSWORD */
document.getElementById("unlockBtn").addEventListener("click", function(){
playClick();
const value = document.getElementById("passInput").value;
if(value === "10102025"){
document.getElementById("unlockSound").play();
showPage("date");
}
});

/* NEXT BUTTONS */
document.querySelectorAll(".nextBtn").forEach(btn=>{
btn.addEventListener("click", function(){
playClick();
showPage(this.dataset.next);
});
});

/* GAME */
let score = 0;
let gameInterval;

document.getElementById("startGameBtn").addEventListener("click", function(){
playClick();
showPage("game");
startGame();
});

function startGame(){
score = 0;
document.getElementById("score").innerText = score;
gameInterval = setInterval(createHeart, 800);
}

function createHeart(){
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";
heart.style.left = Math.random()*90 + "%";

heart.addEventListener("click", function(){
score++;
document.getElementById("score").innerText = score;
heart.remove();
if(score >= 10){
clearInterval(gameInterval);
document.getElementById("heartbeatSound").play();
setTimeout(()=>showPage("final"),500);
}
});

document.getElementById("gameArea").appendChild(heart);
setTimeout(()=>heart.remove(),3000);
}

/* PROPOSAL */
document.getElementById("proposalBtn").addEventListener("click", function(){
playClick();
setTimeout(()=>{
window.location.href="https://gamingninja24x7.github.io/valentine/";
},500);
});

/* BACKGROUND HEARTS */
function createBgHeart(){
const heart = document.createElement("div");
heart.classList.add("bg-heart");
heart.innerHTML = ["❤️","💖","💕","💘"][Math.floor(Math.random()*4)];
heart.style.left = Math.random()*100+"%";
heart.style.fontSize = (15+Math.random()*20)+"px";
document.getElementById("hearts-bg").appendChild(heart);
setTimeout(()=>heart.remove(),8000);
}
setInterval(createBgHeart,600);

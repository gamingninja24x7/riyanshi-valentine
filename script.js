/* BUTTON VIBRATION */
document.addEventListener("click", function(e){
if(e.target.classList.contains("vibrate-btn")){
if(navigator.vibrate){
navigator.vibrate(30);
}
}
});

/* PASSWORD */
function checkPassword(){
const input = document.getElementById("password-input").value;
if(input === "10102025"){
document.getElementById("password-screen").style.display="none";
document.getElementById("step1").classList.remove("hidden");
} else {
document.getElementById("error-msg").innerText="Wrong date 💔";
}
}

/* TRANSITION */
function nextStep(step){
const current=document.querySelector(".panel:not(.hidden)");
current.classList.add("hidden");
document.getElementById("step"+step).classList.remove("hidden");
}

/* LOVE EMOJIS */
const loveContainer=document.getElementById("love-container");
const emojis=["❤️","💖","💕","💘"];
setInterval(()=>{
const love=document.createElement("div");
love.classList.add("love");
love.innerText=emojis[Math.floor(Math.random()*emojis.length)];
love.style.left=Math.random()*100+"vw";
loveContainer.appendChild(love);
setTimeout(()=>love.remove(),8000);
},400);

/* SPARKLES */
const canvas=document.getElementById("sparkle-canvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particles=[];
for(let i=0;i<50;i++){
particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2});
}
setInterval(()=>{
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="rgba(255,182,193,0.5)";
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
p.y+=0.5;
if(p.y>canvas.height) p.y=0;
});
},30);

/* GAME */
let score=0,gameActive=true;
const scoreDisplay=document.getElementById("score");
const gameArea=document.getElementById("game-area");

setInterval(()=>{
if(!gameActive) return;
const heart=document.createElement("div");
heart.innerText="💖";
heart.classList.add("floating-heart");
heart.style.left=Math.random()*90+"%";
heart.onclick=()=>{
score++;
scoreDisplay.textContent=score;
heart.remove();
if(score===10) endGame();
};
gameArea.appendChild(heart);
setTimeout(()=>heart.remove(),4000);
},800);

function endGame(){
gameActive=false;
document.getElementById("love-popup").classList.remove("hidden");
document.getElementById("unlock-sound").play();
document.getElementById("heartbeat-sound").play();
if(navigator.vibrate){ navigator.vibrate([100,50,100]); }
}

function closePopup(){
document.getElementById("love-popup").classList.add("hidden");
document.getElementById("step4").classList.add("hidden");
document.getElementById("step5").classList.remove("hidden");
}

/* FINAL REDIRECT */
function goToProposal(){
window.location.href="https://gamingninja24x7.github.io/valentine/";
}

/* SECRET */
let tapCount=0;
document.addEventListener("click",function(e){
if(e.target.tagName==="H1"){
tapCount++;
if(tapCount===5){
document.getElementById("secret-message").classList.remove("hidden");
setTimeout(()=>document.getElementById("secret-message").classList.add("hidden"),4000);
tapCount=0;
}
}
});

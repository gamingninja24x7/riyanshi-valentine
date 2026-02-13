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

/* YES Button Celebration */
document.querySelectorAll(".yes").forEach(btn => {
btn.addEventListener("click", () => {
alert("You just made me the happiest guy alive ❤️");
});
});

/* Hidden Name Trigger */
let typed = "";
document.addEventListener("keydown", (e) => {
typed += e.key.toLowerCase();
if (typed.includes("riyanshi")) {
alert("I love you more than I show ❤️");
typed = "";
}
});

/* Floating Love Emoji Generator */
const emojis = ["❤️", "💕", "💖", "💘", "💗", "💓"];
const container = document.getElementById("love-container");

function createLove() {
const love = document.createElement("div");
love.classList.add("love");
love.innerText = emojis[Math.floor(Math.random() * emojis.length)];

love.style.left = Math.random() * 100 + "vw";
love.style.animationDuration = (5 + Math.random() * 5) + "s";
love.style.fontSize = (20 + Math.random() * 25) + "px";

container.appendChild(love);

setTimeout(() => {
love.remove();
}, 10000);
}

setInterval(createLove, 300);

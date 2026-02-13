function scrollToGallery() {
document.querySelector(".gallery").scrollIntoView({ behavior: "smooth" });
}

/* Fade-in on scroll */
window.addEventListener("scroll", () => {
const blocks = document.querySelectorAll(".photo-block");

blocks.forEach(block => {
const position = block.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if (position < screenPosition) {
block.classList.add("visible");
}
});
});

/* YES button celebration */
document.querySelectorAll(".yes").forEach(btn => {
btn.addEventListener("click", () => {
alert("You just made me the happiest guy alive ❤️");
});
});

/* Hidden name trigger */
let typed = "";
document.addEventListener("keydown", (e) => {
typed += e.key.toLowerCase();
if (typed.includes("riyanshi")) {
alert("You found the secret. I love you more than I show ❤️");
typed = "";
}
});

/* Password Protection */
let password = prompt("Enter the date that changed everything (DDMMYYYY):");

if (password !== "10102025") {
document.body.innerHTML = `
<h1 style="margin-top:100px;">Wrong date 🤍</h1>
<p>Hint: 10 October 2025.</p>
`;
}

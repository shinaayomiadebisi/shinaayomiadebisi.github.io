// start name animation
const myName = document.querySelectorAll(".myName span");

const myNameLetters = myName.length;

myName.forEach(function (span, i) {
  const mappedIndex = i - myNameLetters / 2;
  span.style.animationDelay = mappedIndex * 0.25 + "s";
});
// end name animation

/* ======================= typing animation =========================== */
var typed = new Typed(".typing", {
  strings: [
    "Software Engineer",
    "Software Developer",
    "Fullstack Engineer",
    "Fullstack Developer",
    "MERN Stack",
    "Backend Engineer",
    "Backend Developer",
    "Frontend Engineer",
    "Frontend Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

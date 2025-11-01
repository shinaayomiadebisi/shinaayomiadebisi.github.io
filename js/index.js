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
    "Web Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Backend Engineer",
    "MERN Stack",
    "Fullstack Developer",
    "Fullstack Engineer",
    "Software Developer",
    "Software Engineer"
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

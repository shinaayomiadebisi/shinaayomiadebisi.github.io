export class ThreeDBox {
  //   @media (prefers-reduced-motion) {
  //   .card {
  //     transform: none !important;
  //   }
  // }
  render3DBox() {
    const card = document.querySelector(".threeD");
    const THRESHOLD = 15;

    function handleHover(e) {
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight } = currentTarget;
      const offsetLeft = currentTarget.getBoundingClientRect().left;
      const offsetTop = currentTarget.getBoundingClientRect().top;

      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;

      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    }

    function resetStyles(e) {
      card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    const card = document.querySelector(".card");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");

    if (!motionMatchMedia.matches) {
      card.addEventListener("mousemove", handleHover);
      card.addEventListener("mouseleave", resetStyles);
    }
  }
}

export class ThreeDBox {
  threeDRotateSides() {
    const hoverArea = document.querySelector(".threeD-hover-area");
    const box = document.querySelector(".threeD");
    const maxRotation = 60; // Max rotation angle in degrees

    hoverArea.addEventListener("mousemove", (e) => {
      // Get positions and dimensions of the container
      const rect = hoverArea.getBoundingClientRect();

      // Find the exact center point of the container
      const width = rect.width;
      const height = rect.height;
      const centerX = rect.left + width / 2;
      const centerY = rect.top + height / 2;

      // Calculate distance from center (-1 to 1)
      const percentX = (e.clientX - centerX) / (width / 2);
      const percentY = (e.clientY - centerY) / (height / 2);

      // Convert percentage to degrees
      const rotateX = -percentY * maxRotation;
      const rotateY = percentX * maxRotation;

      // Apply the transformation
      box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset the box seamlessly when the mouse leaves the area
    hoverArea.addEventListener("mouseleave", () => {
      box.style.transition = "transform 0.5s ease"; // Smooth reset animation
      box.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

    // Re-enable fast transition when mouse re-enters
    hoverArea.addEventListener("mouseenter", () => {
      box.style.transition = "transform 0.1s ease-out";
    });
  }

  threeDBoxAnimationStatePauseOnMobile() {
    const cube = document.querySelector(".threeD");
    const scene = document.querySelector(".scene");
    let isPaused = false;

    scene.addEventListener("touchstart", () => {
      isPaused = !isPaused;
      cube.style.animationPlayState = isPaused ? "paused" : "running";
    });
  }
}

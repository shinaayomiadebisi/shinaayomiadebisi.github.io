export class LazyLoadImages {
  constructor() {}

  static lazyLoad1() {
    // Select all images with the 'lazy' class
    const lazyImages = document.querySelectorAll("img.lazy");
    if (!lazyImages) {
      return;
    }

    // Set up the Intersection Observer options
    const observerOptions = {
      root: null, // defaults to the browser viewport
      rootMargin: "0px",
      threshold: 0.1, // callback fires when 10% of the image is visible
    };

    // The callback function that runs when an image enters the viewport
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // Swap the data-src value into the src attribute to trigger loading
          img.src = img.dataset.src;
          // Optional: add a load event listener to remove a placeholder blur effect
          img.addEventListener("load", () => {
            img.classList.remove("lazy"); // remove the 'lazy' class after loading
          });
          // Stop observing the image once it has loaded
          observer.unobserve(img);
        }
      });
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Start observing all target images
    lazyImages.forEach((image) => {
      observer.observe(image);
    });
  }

  static lazyLoad2() {
    const lazyLoadImages = document.querySelectorAll(".lazy");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          imageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyLoadImages.forEach((lazyImage) => {
      imageObserver.observe(lazyImage);
    });
  }
}

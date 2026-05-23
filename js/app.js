import { certificationsData, projectsData } from "./data.js";
import { LazyLoadImages } from "./lazyLoadImages.js";
import { UI } from "./ui.js";
import { Helper } from "./helper.js";

class Portfolio {
  constructor() {
    this.ui = new UI();
    this.helper = new Helper();
  }

  async init() {
    try {
      this.ui.init();

      this.ui.renderProjectCards(projectsData);
      this.ui.renderCertificateCards(certificationsData);
      this.ui.mobileSidebar();
      this.ui.setScrollToView();

      LazyLoadImages.lazyLoad1();

      this.helper.onScrollEvents();

      let footer = document.getElementsByTagName("footer")[0];
      let footerDate = footer.getElementsByClassName("footerDate")[0];
      footerDate.innerHTML = new Date().getFullYear();
    } catch (error) {
      console.error("Failed to initialize app: ", error);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new Portfolio();
  app.init();
});

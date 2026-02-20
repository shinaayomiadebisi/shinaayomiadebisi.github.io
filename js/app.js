import { certificationsData, projectsData } from "./data.js";
import { UI } from "./ui.js";

class Portfolio {
  constructor() {
    this.ui = new UI();
  }

  async init() {
    try {
      this.ui.init();

      this.ui.renderProjectCards(projectsData);
      this.ui.renderCertificateCards(certificationsData);
      this.ui.mobileSidebar();
      this.ui.setScrollToView();

      let footer = document.getElementsByTagName("footer")[0];
      let footerDate = footer.getElementsByClassName("footerDate")[0];
      footerDate.innerHTML = new Date().getFullYear();
    } catch (error) {
      console.error("Failed to initialize app: ", error);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const app = new Portfolio();
  app.init();
});

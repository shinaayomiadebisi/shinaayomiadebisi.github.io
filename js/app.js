import { certificationsData, projectsData } from "./data.js";
import { UI } from "./ui.js";

let footer = document.getElementsByTagName("footer")[0];

let footerDate = footer.getElementsByClassName("footerDate")[0];
footerDate.innerHTML = new Date().getFullYear();

class Portfolio {
  constructor() {
    this.ui = new UI();
  }

  init() {
    try {
      this.ui.init();

      this.ui.renderProjectCards(projectsData);
      this.ui.renderCertificateCards(certificationsData);
    } catch (error) {
      console.error("Failed to initialize app: ", error);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new Portfolio();
  app.init();
});

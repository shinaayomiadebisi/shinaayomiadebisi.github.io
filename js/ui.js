export class UI {
  constructor() {
    this.projectCardWrapper = null;
    this.projectCard = null;
    this.certificatesContainer = null;
  }

  init() {
    this.projectCardWrapper = document.querySelector(".projects-card-wrapper");
    this.projectCard = document.querySelector(".project-card");
    this.certificatesContainer = document.querySelector(
      ".certificates-wrapper"
    );
  }

  renderIcon() {
    const card = document.createElement("span");
    card.classList = `fa`;

    return card;
  }

  createProjectCard(project) {
    console.log("project", project);
    const card = this.projectCard.cloneNode(true);
    card.getElementsByTagName("h4")[0].innerHTML = project.title;
    card.getElementsByClassName("description")[0].textContent =
      project.description;
    card.querySelector(".project-tools");
    card.dataset.project = project.id;
    card.hidden = false;

    return card;
  }

  renderProjectCards(projects) {
    console.log(projects);
    // this.projectCardWrapper.innerHTML = "";
    projects.forEach((project) => {
      const card = this.createProjectCard(project);
      this.projectCardWrapper.appendChild(card);
    });
  }

  createCertificateCard(certificate) {
    const card = document.createElement("div");
    card.className = "certificate-card";
    card.innerHTML = `
      <div>
        <h4>${certificate.title}</h4>
      </div>
    `;

    return card;
  }

  renderCertificateCards(certificates) {
    certificates.forEach((certificate) => {
      const card = this.createCertificateCard(certificate);
      this.certificatesContainer.appendChild(card);
    });
  }
}

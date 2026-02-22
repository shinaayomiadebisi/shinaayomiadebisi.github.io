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
      ".certificates-wrapper",
    );
  }

  renderIcon(tool) {
    const card = document.createElement("span");
    if (tool.class) {
      card.classList = `fa-brands ${tool.class}`;
    } else {
      card.textContent = tool.name;
      card.className = "";
    }

    return card;
  }

  createProjectCard(project) {
    console.log("project", project);
    const card = this.projectCard.cloneNode(true);
    card.getElementsByTagName("img")[0].src = project.image;
    card.getElementsByTagName("img")[0].dataset.src = project.image;
    card.getElementsByTagName("h4")[0].innerHTML = project.title;
    card.getElementsByClassName("description")[0].textContent =
      project.description;
    card
      .getElementsByClassName("overlay-wrapper")[0]
      .getElementsByTagName("a")[0].href = project.githubLink;

    if (project.liveUrl) {
      card
        .getElementsByClassName("overlay-wrapper")[0]
        .getElementsByTagName("a")[1].href = project.liveUrl;
      card
        .getElementsByClassName("overlay-wrapper")[0]
        .getElementsByTagName("a")[1].target = "_blank";
    }
    project.tools.forEach((tool) => {
      const toolCard = this.renderIcon(tool);
      card.querySelector(".project-tools").appendChild(toolCard);
    });

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
    card.className = "card";
    card.innerHTML = `
      
        <div class="card-header">
          <img src="${certificate.image}" alt="${certificate.title}" data-src="${certificate.image}" loading="lazy" class="lazy" />
        </div>
        <div class="card-content">
          <h4 class="title">${certificate.title}</h4>
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

  mobileSidebar() {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const sidebar = document.querySelector(".side-nav");

    hamburgerBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      sidebar.classList.toggle("w-60");
    });

    document.addEventListener("click", function (event) {
      const isClickInsideSidebar = sidebar.contains(event.target);
      const isClickOnToggleBtn = hamburgerBtn.contains(event.target);

      if (!isClickInsideSidebar && !isClickOnToggleBtn) {
        sidebar.classList.remove("w-60");
      }
    });
  }

  setScrollToView() {
    document.querySelectorAll("a[data-target]").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor link behavior

        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth", // Smooth scrolling animation
            block: "start", // Align the top of the element to the top of the viewport
          });
        }
      });
    });
  }
}

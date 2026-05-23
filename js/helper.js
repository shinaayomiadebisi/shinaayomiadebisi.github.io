export class Helper {
  constructor() {}

  onScrollEvents() {
    window.onscroll = () => {
      let maxHeight = window.document.body.scrollHeight - window.innerHeight;
      let percentage = (window.scrollY / maxHeight) * 100;
      document.querySelector(".scroll-indicator").style.width =
        percentage + "%";
    };
  }
}

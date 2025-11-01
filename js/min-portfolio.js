let footer = document.getElementsByTagName("footer")[0];

let footerDate = footer.getElementsByClassName("footerDate")[0];
footerDate.innerHTML = new Date().getFullYear();

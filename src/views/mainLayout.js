import { USER_INTERFACE_ID } from "../constants.js";

export function initMainLayout() {
  const backgroundImage = createBackgroundImage();
  document.body.prepend(backgroundImage);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  const header = createHeader();
  userInterface.appendChild(header);
  const main = document.createElement("main");
  main.classList.add("main-content");
  userInterface.appendChild(main);
}

export function createBackgroundImage() {
  const backgroundImage = document.createElement("img");
  backgroundImage.src = "/public/images/app_img.png";
  backgroundImage.alt = "background image";
  backgroundImage.classList.add("background-img");
  return backgroundImage;
}

export function createHeader() {
  // logo + menu

  const header = document.createElement("header");
  header.classList.add("header");
  return header;
}

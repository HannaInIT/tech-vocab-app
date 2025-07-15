import { USER_INTERFACE_ID } from "../constants.js";
import { fetchWordInformation } from "../services/wordsService.js";
import { MAIN_CONTENT_ID } from "../constants.js";

export function initMainLayout() {
  const backgroundImage = createBackgroundImage();
  document.body.prepend(backgroundImage);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  const header = createHeader();
  userInterface.appendChild(header);
  const main = document.createElement("main");
  main.classList.add(MAIN_CONTENT_ID);
  main.id = MAIN_CONTENT_ID
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

  const header = document.createElement("header");
  header.classList.add("header");

  //logo

  //search
  const searchInput = document.createElement("input");
  header.appendChild(searchInput);
  searchInput.classList.add("search-input");
  searchInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      console.log(searchInput.value);
      const wordInfo = await fetchWordInformation(searchInput.value);
      searchInput.value = "";
      console.log(wordInfo);
      // add initWordPage func with word info
    }
  });

  //menu

  return header;
}

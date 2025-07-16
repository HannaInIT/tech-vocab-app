import {
  USER_INTERFACE_ID,
  MAIN_CONTENT_ID,
  CLASS_LOGO,
} from "../constants.js";
import {
  fetchWordInformation,
} from "../services/wordsService.js";
import { initWelcomePage } from "../pages/welcomePage.js";
import { initWordPage } from "../views/randomWordView.js";
import { initRandomWordPage } from "../pages/randomWordPage.js";
import { fetchWordImage } from "../services/imageService.js";

export function initMainLayout() {
  const backgroundImage = createBackgroundImage();
  document.body.prepend(backgroundImage);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  const header = createHeader();
  userInterface.appendChild(header);
  const main = document.createElement("main");
  main.classList.add(MAIN_CONTENT_ID);
  main.id = MAIN_CONTENT_ID;
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
  const logo = document.createElement("img");
  logo.src = "/public/images/logo.png";
  logo.alt = "Logo";
  logo.classList.add(CLASS_LOGO);

  header.appendChild(logo);

  //search
  const searchInput = document.createElement("input");
  header.appendChild(searchInput);
  searchInput.placeholder = "Search...";
  searchInput.classList.add("search-input");
  searchInput.name = "search";
  searchInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      console.log(searchInput.value);
      const wordInfo = await fetchWordInformation(searchInput.value);

      const imageUrl = await fetchWordImage(wordInfo.word);
      searchInput.value = "";

      initWordPage(wordInfo, imageUrl, true);
    }
  });
  searchInput.addEventListener("blur", async (e) => {
    // if (e.key === "Enter") {
      console.log(searchInput.value);
      const wordInfo = await fetchWordInformation(searchInput.value);

      const imageUrl = await fetchWordImage(wordInfo.word);
      searchInput.value = "";

      initWordPage(wordInfo, imageUrl, true);
    // }
  });

  // async function fetchWordAndInitRandomWordPage() {
  //   const word = await getRandomWordInformation();
  //   const imageUrl = await fetchWordImage(word.word);
  //   initWordPage(word, imageUrl, false);
  // }

  //menu
  const menuConfig = {
    Welcome: initWelcomePage,
    // "Random word": fetchWordAndInitRandomWordPage,
    "Random word": initRandomWordPage,
  };
  const menuConfigs = [
    {title : 'Welcome', handler : initWelcomePage},
    // "Random word": fetchWordAndInitRandomWordPage,
    {title : "Random word", handler : initRandomWordPage},
]


  const menu = document.createElement("nav");
  const menuList = document.createElement("ul");
  menuList.classList.add("menu-list");

  let currentPage = 'Welcome'

 menuConfigs.forEach(({title, handler}) => {
    const listItem = document.createElement("li");

    const link = document.createElement("a");
    link.href = "#";
   link.textContent = title;
    if (currentPage === title) link.classList.add('current-page-disabled');
    link.classList.add("menu-link");

   link.addEventListener("click", (e) => {
     if (currentPage === title) return;
     const lastLink = document.querySelector('.current-page-disabled');
     if (lastLink) lastLink.classList.remove('current-page-disabled');

     e.preventDefault();
     currentPage = title;
     handler();

     link.classList.add('current-page-disabled')
    });

    listItem.appendChild(link);
    menuList.appendChild(listItem);
  });
  menu.appendChild(menuList);
  header.appendChild(menu);

  return header;
}

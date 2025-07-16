import { MAIN_CONTENT_ID, START_LEARNING_BUTTON_ID } from "../constants.js";
// import { initWordPage } from "../views/randomWordView.js";
import { createWelcomeElement } from "../views/welcomeView.js";
import { initRandomWordPage } from "./randomWordPage.js";


export const initWelcomePage = () => {
  document.body.className = "welcome-background";
  const mainContent = document.getElementById(MAIN_CONTENT_ID);
  mainContent.innerHTML = "";
  const welcomeElement = createWelcomeElement();
  mainContent.appendChild(welcomeElement);
  document
    .getElementById(START_LEARNING_BUTTON_ID)
    .addEventListener("click", startLearning);
};

export const startLearning = () => {
  document.body.className = "";
  initRandomWordPage();
  // initWordPage()
};

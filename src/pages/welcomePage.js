import { USER_INTERFACE_ID, START_LEARNING_BUTTON_ID } from "../constants.js";
import { createWelcomeElement } from "../views/welcomeView.js";
// import { initRandomWordPage} from

export const initWelcomePage = () => {
  document.body.className = "welcome-background";

  const mainContent = document.querySelector(".main-content");
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
};

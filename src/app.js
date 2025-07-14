import { initWelcomePage } from "./pages/welcomePage.js";
import { initMainLayout } from "./views/mainLayout.js";

const loadApp = () => {
  initMainLayout();
  initWelcomePage();
};
window.addEventListener("load", loadApp);

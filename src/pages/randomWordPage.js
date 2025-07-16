import { getRandomWordInformation } from "../services/wordsService.js";
import { initWordPage } from "../views/randomWordView.js";
import { fetchWordImage } from "../services/imageService.js";

export async function initRandomWordPage() {
  const word = await getRandomWordInformation();
  const imageUrl = await fetchWordImage(word.word);
  initWordPage(word, imageUrl, false);
}
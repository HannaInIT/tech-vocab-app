import { getRandomWordInformation, fetchWordImage } from "../services/wordsService.js";
import { initWordPage } from "../views/randomWordView.js";

export async function initRandomWordPage() {
  const word = await getRandomWordInformation();
  const imageUrl = await fetchWordImage(word.word);
  initWordPage(word, imageUrl, false);
}
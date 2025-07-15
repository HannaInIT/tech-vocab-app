import { MAIN_CONTENT_ID } from "../constants.js";

export function extractExamplesFromWordData(meanings) {
  const examples = [];

  for (const meaning of meanings) {
    meaning.definitions.forEach((definition) => {
      if (definition.example) {
        examples.push(definition.example);
      }
    });
  }
  return examples.slice(0, 3);
}

export function initWordPage(wordData, wordImage, isSearchPage) {
  const main = document.getElementById(MAIN_CONTENT_ID);

  const wordTranscription = wordData.phonetics.find((p) => p.text).text;
  const wordAudio = wordData.phonetics.find((p) => p.audio).audio;

  const mainWordMeaning = wordData.meanings[0];

  const wordExamples = extractExamplesFromWordData(wordData.meanings);

  const examplesListHtml = wordExamples.map((example) => `<li>${example}</li>`).join('')

  main.innerHTML = String.raw`
  <h2>${isSearchPage ? "Search result" : "Random word"}</h2>
  <div class="word-container">
    <img src="${wordImage}" class="word-img"></img>

    <div class="right-wrapper">
      <h3>${wordData.word}</h3>

      <div class="pronunciation-wrapper">
          <p>${wordTranscription}</p>

          ${wordAudio ? `<audio src="${wordAudio}" controls="true"></audio>` : ""}        
      </div>

      <div class="word-meaning-container">${wordData.word} ${mainWordMeaning.partOfSpeech} - ${mainWordMeaning.definitions[0].definition}</div>

      <div>
        <ul>
          ${examplesListHtml}
      </ul>
      </div>
    </div>
  </div>
  `;
}

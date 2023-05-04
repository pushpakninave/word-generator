import { WordsJson } from "./wordsJson";
// select 
const generateBtn = document.querySelector(".generate-btn");
const word = document.querySelector(".randomWord");
const definition = document.querySelector(".word-definition");

// eventListeners
generateBtn.addEventListener("click", generateWord);
document.addEventListener("DOMContentLoaded", setinitialWord);

// functions
function setinitialWord(){
    word.innerHTML = WordsJson[0].word + " : ";
    definition.innerHTML = WordsJson[0].definition;
  // console.log(definition.innerHTML);
  }
function generateWord(){
    let wordIndex = Math.floor(Math.random() * 5348);
    const newWord = WordsJson[wordIndex];
    word.innerHTML = newWord.word + " : " ;
    definition.innerHTML = newWord.definition;
    // console.log(newWord.definition);
}
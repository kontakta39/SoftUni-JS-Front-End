function solve(word, text) {
  let arrayWords = word.split(', ');
  let arrayText = text.split(' ');
  let modifiedString = '';

  for (let i = 0; i < arrayText.length; i++) {
    if (arrayText[i].includes('*')) {
      for (let t = 0; t < arrayWords.length; t++) {
        if (arrayText[i].length === arrayWords[t].length) {
            arrayText[i] = arrayWords[t];
            break;
        }
      }
    }

    modifiedString += `${arrayText[i]} `;
  }

  console.log(modifiedString.trimEnd());
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');
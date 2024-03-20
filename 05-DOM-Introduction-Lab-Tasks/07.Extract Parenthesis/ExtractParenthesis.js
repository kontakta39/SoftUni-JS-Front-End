function extract(content) {
  let text = document.getElementById(content);
  let matches = text.textContent.match(/\((.*?)\)/g);
  let textArray = matches.map(match => match.slice(1, -1));
  let finalString = '';

  for (let i = 0; i < textArray.length; i++) {
    if (i === textArray.length - 1) {
        finalString += textArray[i];
    } else {
        finalString += `${textArray[i]}; `;
    }
  }

  return finalString;
}
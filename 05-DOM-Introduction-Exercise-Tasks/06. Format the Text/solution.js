function solve() {
  const textarea = document.getElementById("input");
  const textContent = textarea.value;
  const sentenceArray = textContent.split('.').map(sentence => sentence.trim() + '.');
  sentenceArray.pop();
  const outputDiv = document.getElementById('output');

  if (sentenceArray.length <= 3) {
    let text = '';
    const paragraph = document.createElement('p');

     for (let item of sentenceArray) {
      text += `${item} `;
     }

     paragraph.textContent = text.trimEnd();
     outputDiv.appendChild(paragraph);
  } else {
     while (sentenceArray.length > 0) {
      let text = '';
      const paragraph = document.createElement('p');

      for (let i = 3; i > 0; i--) {
        text += `${sentenceArray[0]} `;
        sentenceArray.shift();

        if (sentenceArray.length === 0) {
          break;
        }
      }

      paragraph.textContent = text.trimEnd();
      outputDiv.appendChild(paragraph);
     }
  }
}
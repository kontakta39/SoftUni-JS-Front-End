function solve(text) {
  let currentText = '';

  for (let i = 0; i < text.length; i++) {
    let asciiCode = text[i].charCodeAt(0);
    if (asciiCode >= 65 && asciiCode <= 90) {
      currentText += `, ${text[i]}`;      
    } else {
        currentText += text[i];
    }
  }

  currentText = currentText.substring(1).trimStart();
  console.log(currentText);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');
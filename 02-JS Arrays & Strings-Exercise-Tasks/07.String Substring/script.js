function solve(word, text) {
  let textToLowercase = text.toLowerCase();
  let textArray = textToLowercase.split(' ');

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === word) {
        console.log(textArray[i]);
        return;
    }
  }

  console.log(`${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');
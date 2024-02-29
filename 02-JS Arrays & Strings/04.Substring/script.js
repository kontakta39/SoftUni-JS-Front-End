/*function solve(word, startIndex, count) {
   let newWord = '';

   for (let i = startIndex; i < word.length; i++) {
    if (i > count) {
      break;
    }

    newWord += word[i];
   }

   console.log(newWord);
}*/

function solve(word, startIndex, count) {
  let newWord = word.substring(startIndex, startIndex + count);

  console.log(newWord);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);
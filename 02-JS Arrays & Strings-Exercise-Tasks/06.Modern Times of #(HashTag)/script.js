function solve(text) {
  let textArray = text.split(' ');
  let regex = /^[a-zA-Z]+$/;
  let wordWithHashtag = '';

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].includes('#') && textArray[i].length > 1) {
        wordWithHashtag = textArray[i].substring(1);
        if (regex.test(wordWithHashtag)) {
            console.log(wordWithHashtag);
        }
    }
  }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
/*function solve(text, word) {
    let wordDigitsCount = '';
    for(i = 0; i < word.length; i++) {
        wordDigitsCount += '*';
    }
     
    let replacedText = text.replace(word, wordDigitsCount);

    console.log(replacedText);
}*/

function solve(text, word) {
    while (text.includes(word)) {
    text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');
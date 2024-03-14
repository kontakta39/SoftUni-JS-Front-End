function solve(input) {
    let wordsToSearch = input[0].split(' ');
    input.shift();
    let wordCounts = {};
  
    for (let word of wordsToSearch) {
      wordCounts[word] = 0;
    }
  
    for (let word of input) {
      if (wordCounts.hasOwnProperty(word)) {
        wordCounts[word]++;
      }
    }
  
    let sortedWordCounts = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
  
    for (let [word, count] of sortedWordCounts) {
      console.log(`${word} - ${count}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
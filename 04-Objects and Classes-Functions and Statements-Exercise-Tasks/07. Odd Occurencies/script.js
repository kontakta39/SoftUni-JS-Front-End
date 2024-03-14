function solve(input) {
    let wordsArray = input.split(' ');
    let wordCounts = new Map();
  
    for (let word of wordsArray) {
        let lowercasedWord = word.toLowerCase();

        if (wordCounts.has(lowercasedWord)) {
        let keyToUpdate = lowercasedWord;
        let currentValue = wordCounts.get(keyToUpdate); 
        let newValue = currentValue + 1; 
        wordCounts.set(keyToUpdate, newValue);
        } else {
            wordCounts.set(lowercasedWord, 1);
        }
    }

    let finalString = '';

    for (let [word, count] of wordCounts) {
        if (count % 2 == 1) {
            finalString += `${word} `;
        }
    }

    console.log(finalString.trimEnd());
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');
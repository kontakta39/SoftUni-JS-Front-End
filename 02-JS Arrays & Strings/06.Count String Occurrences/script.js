function solve(text, word) {
    let count = 0;

    const splitArray = text.split(/\s+/);

    for (let item of splitArray) {
        if (item === word) {
            count++;
        }
    }

    console.log(count);
}

solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages','softuni');
function solve(numOne, numTwo, numThree) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;
     
    let array = [];
    array.push(numOne);
    array.push(numTwo);
    array.push(numThree);

    for (let item of array) {
        if (smallestNumber > item) {
            smallestNumber = item;
        }
    }
    
    console.log(smallestNumber);
}

solve(2, 5, 3);
solve(600, 342, 123);
solve(25, 21, 4);
solve(2, 2, 2);
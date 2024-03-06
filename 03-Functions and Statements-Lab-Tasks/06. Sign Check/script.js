function solve(numberOne, numberTwo, numberThree) {
    let result = mathMultiply(mathMultiply(numberOne, numberTwo), numberThree);

    function mathMultiply(a, b) {
        let operation = (a, b) => a * b; 
        return operation(a, b);
    }

    if (result > 0) {
        console.log(`Positive`);
    } else {
        console.log(`Negative`);
    }
}

solve( 5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
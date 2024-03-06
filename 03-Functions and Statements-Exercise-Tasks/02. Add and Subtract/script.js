function solve(numberOne, numberTwo, numberThree) {
    let result = mathSubtract(mathSum(numberOne, numberTwo), numberThree);

    function mathSum(a, b) {
        let operation = (a, b) => a + b; 
        return operation(a, b);
    }

    function mathSubtract(a, b) {
        let operation = (a, b) => a - b; 
        return operation(a, b);
    }

    console.log(result);
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);
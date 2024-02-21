function solve (numberOne, numberTwo, numberThree, result) {
    if (numberOne > numberTwo) {
        result = numberOne;
    } else {
        result = numberTwo;
    }

    if (result > numberThree) {
        console.log(`The largest number is ${result}.`);
    } else {
        result = numberThree;
        console.log(`The largest number is ${result}.`);
    }
}

solve (5, -3, 16);
solve(-3, -5, -22.5);

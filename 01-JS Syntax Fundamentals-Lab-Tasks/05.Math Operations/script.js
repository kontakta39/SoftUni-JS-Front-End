function solve (numberOne, numberTwo, operator) {
   if (operator == '+') {
    console.log(numberOne + numberTwo);
   } else if (operator == '-') {
    console.log(numberOne - numberTwo);
   } else if (operator == '*') {
    console.log (numberOne * numberTwo);
   } else if (operator == '/') {
    console.log (numberOne / numberTwo);
   } else if (operator == '%') {
    console.log (numberOne % numberTwo);
   } else {
    console.log (numberOne ** numberTwo);
   }
}

solve (5, 6, '+');
solve (3, 5.5, '*');
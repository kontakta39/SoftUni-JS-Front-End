function solve(numOne, numTwo) {
  let firstFactorial = factorial(numOne);
  let secondFactorial = factorial(numTwo);
 
  let result = firstFactorial / secondFactorial;
  console.log(result.toFixed(2));

  function factorial(number) {
    let result = 1;

    for (i = number; i > 0; i--) {
        result *= i;
    }

    return result;
  }   
}

solve(5, 2);
solve(6, 2);
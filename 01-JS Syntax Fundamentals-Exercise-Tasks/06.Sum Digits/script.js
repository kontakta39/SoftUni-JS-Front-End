function solve(input) {
  let sum = 0;
  let numberToString = input.toString();

  for (let i = 0; i < numberToString.length; i++) {
    sum += Number(numberToString[i]);
  }

  console.log(sum);
}

solve(245678);
solve(97561);
solve(543);
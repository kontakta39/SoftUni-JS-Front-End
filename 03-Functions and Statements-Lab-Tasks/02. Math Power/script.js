function solve(number, power) {
  let result = 1;

  for (let i = 1; i <= power; i++) {
    result *= number;
  }

  console.log(result);
}

solve(2,8);
solve(3,4);
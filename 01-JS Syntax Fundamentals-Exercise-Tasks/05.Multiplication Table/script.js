function solve(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${parseInt(number) * parseInt(i)}`);
  }
}

solve(5);
solve(2);
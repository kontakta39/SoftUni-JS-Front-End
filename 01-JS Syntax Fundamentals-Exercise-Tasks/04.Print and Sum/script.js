function solve(start, end) {
  let numbersRow = '';
  let sum = 0;

  for (let i = start; i <= end; i++) {
    numbersRow += `${i} `;
    sum += i;
  }

  console.log(numbersRow.trimEnd());
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
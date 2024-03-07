function solve(matrixSize) {
  let stringBuilder = [];

  for (let i = 0; i < matrixSize; i++) {
    stringBuilder.push(matrixRow(matrixSize));
    stringBuilder.push('\n');
  }

  var result = stringBuilder.join('');
  console.log(result);

  function matrixRow(size) {
    let currentRow = '';

    for (let i = 0; i < size; i++) {
        currentRow += `${size.toString()} `;
    }

    return currentRow.trimEnd();
  }
}

solve(3);
solve(7);
solve(2);
function solve(fruit, grams, pricePerKg) {
  let kilograms = grams / 1000;

  console.log(`I need $${(kilograms * pricePerKg).toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);
function solve(score) {
  if (score < 3.00) {
    console.log(`Fail (${Math.floor(score)})`);
  } else if (score >= 3.00 && score < 3.50) {
    console.log(`Poor (${score.toFixed(2)})`);
  } else if (score >= 3.50 && score < 4.50) {
    console.log(`Good (${score.toFixed(2)})`);
  } else if (score >= 4.50 && score < 5.50) {
    console.log(`Very good (${score.toFixed(2)})`);
  } else {
    console.log(`Excellent (${score.toFixed(2)})`);
  }
}

solve(3.33);
solve(4.50);
solve(2.99);
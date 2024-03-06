function solve(charOne, charTwo) {
  let digitOne = charOne.charCodeAt(0);
  let digitTwo = charTwo.charCodeAt(0);
  let array = [];

  if (digitOne < digitTwo) {
    for (let i = digitOne + 1; i < digitTwo; i++) {
       array.push(String.fromCharCode(i));
    }
  } else {
    for (let i = digitTwo + 1; i < digitOne; i++) {
        array.push(String.fromCharCode(i));
     }
  }

  console.log(array.join(' '));
}

solve('a', 'd');
solve('#', ':');
solve('C', '#');
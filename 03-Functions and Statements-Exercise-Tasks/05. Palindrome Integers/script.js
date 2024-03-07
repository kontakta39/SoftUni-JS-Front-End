function solve(array) {
  for (let i = 0; i < array.length; i++) {
    let currentNumberDigits = array[i].toString().split('').map(Number);
    let flag = digitLoop(currentNumberDigits);
    console.log(flag);
  } 
  
  function digitLoop(digitArray) {
    let flag = true; // Initialize flag for each number
    while (digitArray.length > 1) {
      if (digitArray[0] !== digitArray[digitArray.length - 1]) {
        flag = false;
        break; // Break the loop if digits don't match
      }
      digitArray.shift();
      digitArray.pop();
    }

    return flag;
  }
}

solve([123,323,421,121]);
solve([32,2,232,1010]);
function solve(array) {
  let sortedArray = array.slice().sort((a, b) => a - b);
  let newArray = [];
  
  while (true) {

    if (array.length > 0) {
        let smallestElement = Math.min(...array);
        newArray.push(smallestElement);
        let smallestElementIndex = array.indexOf(smallestElement);
        array.splice(smallestElementIndex, 1);
    } else {
        break;
    }

    if (array.length > 0) {
        let biggestElement = Math.max(...array);
        newArray.push(biggestElement);
        let biggestElementIndex = array.indexOf(biggestElement);
        array.splice(biggestElementIndex, 1);
    } else {
        break;
    }
  }

  return newArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
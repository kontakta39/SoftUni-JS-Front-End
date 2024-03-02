/*function solve(array, stepCount) {
  let newArray = [];
  newArray.push(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (i === stepCount) {
        newArray.push(array[i]);

        stepCount *= 2;
    }
  }

  return newArray;
}*/

function solve(array, stepCount) {
    let newArray = [];

    for (let i = 0; i < array.length; i += stepCount) {
        newArray.push(array[i]);
    }
    
    return newArray;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));
console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));
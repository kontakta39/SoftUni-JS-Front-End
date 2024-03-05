function solve(numOne, numTwo, operator) {
  let result = 0;
  
  switch (operator) {
    case 'multiply':
        result = (numOne, numTwo) => numOne * numTwo;   
    break; 
    case 'divide':
        result = (numOne, numTwo) => numOne / numTwo;  
    break; 
    case 'add':
        result = (numOne, numTwo) => numOne + numTwo;    
    break;
    case 'subtract':
        result = (numOne, numTwo) => numOne - numTwo;     
    break;  
  }
  
  return result(numOne, numTwo);
}

console.log(solve(5, 5, 'multiply'));
console.log(solve(40, 8, 'divide'));
console.log(solve(12, 19, 'add'));
console.log(solve(50, 13, 'subtract'));
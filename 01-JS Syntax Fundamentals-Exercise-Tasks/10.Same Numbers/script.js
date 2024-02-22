function solve(input) {
   let numberToString = input.toString();
   let condition = true;
   let sum = 0;

   for (let i = 0; i < numberToString.length; i++) {
     if (i === numberToString.length-1) {
        break;
     }

     if (numberToString[i] !== numberToString[i+1]) { 
        condition = false;
        break;
     }
   }

   for (let i = 0; i < numberToString.length; i++) {
      sum += Number(numberToString[i]);
   }

   console.log(condition);
   console.log(sum);
}

solve(2222222);
solve(1234);
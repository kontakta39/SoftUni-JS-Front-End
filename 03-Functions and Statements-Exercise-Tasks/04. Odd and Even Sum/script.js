function solve(input) {
   const array = input.toString().split('').map(Number);
   const evenArray = [];
   const oddArray = [];

   for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 0) {
        evenArray.push(Number(array[i]));
    } else {
        oddArray.push(Number(array[i]));
    }
   }

   let oddSum = 0;
   let evenSum = 0;

   evenArray.forEach(function(number) {
    evenSum += number;
   });

   oddArray.forEach(function(number) {
    oddSum += number;
   });

   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);
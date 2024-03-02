function solve(count, array) {
   for (let i = 0; i < array.length; i++) {
     if (count === array.length) {
        break;
     }

     array.pop();
     i = 0;
   }

   array = array.reverse();
   let arrayString = '';

   for (let item of array) {
    arrayString += `${item} `;
   }

   console.log(arrayString);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
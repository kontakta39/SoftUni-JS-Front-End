function solve(numberPercent) {
   let loadingBar = '[';

   for (let i = 10; i <= 100; i+=10) {
     if (i > numberPercent) {
        loadingBar += `.`;
     } else {
        loadingBar += `%`;
     }
   }

   loadingBar += `]`;

   if (numberPercent === 100) {
    console.log(`${numberPercent}% Complete!`);
    console.log(loadingBar);
   } else {
    console.log(`${numberPercent}% ${loadingBar}`);
    console.log(`Still loading...`);
   }
}

solve(30);
solve(50);
solve(100);
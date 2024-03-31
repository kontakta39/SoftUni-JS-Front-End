function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textarea = document.querySelector('#inputs textarea');
      const inputText = textarea.value;
      const arrayOfStrings = inputText.split(/\ - |\,/);
      let restaurants = [];
      let restaurantName = '';

      for (let i = 0; i < arrayOfStrings.length; i++) {
         arrayOfStrings[i] = arrayOfStrings[i].replace(/\[\"|\"\]|\"/g, '').trimStart().trimEnd();
      }
      
      for (let item of arrayOfStrings) {
        
        let elementSplit = item.split(' ');

        if (elementSplit.length === 1) {
           restaurantName = elementSplit[0];

           if (!restaurants.includes(restaurantName)) {
            let currentRestaurant = {
               name: elementSplit[0],
               workers: []
            }

            restaurants.push(currentRestaurant);
           }
        } else {
            let worker = {
               name: elementSplit[0],
               salary: elementSplit[1]
            };
             
         let currentRestaurant = restaurants.find(restaurant => restaurant.name === restaurantName);
         currentRestaurant.workers.push(worker);
        }
      }

      let restaurantStatistics = [];
      let restaurantAverageSalary = 0;
      let restaurantBestSalary = 0;

      for (let restaurant of restaurants) {
         for (let worker of restaurant.workers) {
            restaurantAverageSalary += Number(worker.salary);

            if (Number(worker.salary) > restaurantBestSalary) {
               restaurantBestSalary = Number(worker.salary);
            }
         }

         restaurantAverageSalary /= restaurant.workers.length * 1.0;

         let currentRestaurantStatistics = {
            name: restaurant.name,
            averageSalary: restaurantAverageSalary,
            bestSalary: restaurantBestSalary
         }

         restaurantStatistics.push(currentRestaurantStatistics);
         restaurantAverageSalary = 0;
         restaurantBestSalary = 0;
      }

      let restaurantWithHighestAVGSalary = 0;

      for (let restaurant of restaurantStatistics) {
         if (restaurant.averageSalary > restaurantWithHighestAVGSalary) {
            restaurantWithHighestAVGSalary = restaurant.averageSalary;
         }
      }

      let bestRestaurant = restaurantStatistics.find(restaurant => restaurant.averageSalary === restaurantWithHighestAVGSalary);
      let bestRestaurantWorkers = restaurants.find(restaurant => restaurant.name === bestRestaurant.name);
      bestRestaurantWorkers.workers.sort((a, b) => b.salary - a.salary);

      let paragraphBestRestaurant = document.querySelector('#bestRestaurant p');
      paragraphBestRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let sortedWorkers = '';

      for (let currentWorker of bestRestaurantWorkers.workers) {
         sortedWorkers += `Name: ${currentWorker.name} With Salary: ${currentWorker.salary} `;
      }

      let paragraphBestRestaurantWorkers = document.querySelector('#workers p');
      paragraphBestRestaurantWorkers.textContent = sortedWorkers.trimEnd();
   }
}
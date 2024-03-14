function solve(input) {
    let parking = new Set();
  
    for (let i = 0; i < input.length; i++) {
      let currentCar = input[i].split(', ');
      let operation = currentCar[0];
      let carNumber = currentCar[1];
  
      if (operation === 'IN') {
        parking.add(carNumber);
      } else {
        parking.delete(carNumber);
      }
    }
  
    if (parking.size === 0) {
      console.log(`Parking Lot is Empty`);
    } else {
      const sortedParking = Array.from(parking).sort((a, b) => a.localeCompare(b));
      sortedParking.forEach(item => {
        console.log(item);
      });
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);
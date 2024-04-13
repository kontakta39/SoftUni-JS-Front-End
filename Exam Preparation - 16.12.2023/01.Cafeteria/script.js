function solve(input) {
   let baristaCount = Number(input.shift());
   let baristas = [];
   let counter = 0;

   for (let i = 0; i < baristaCount; i++) {
      let currentBarista = input.shift();
      let baristaArray = currentBarista.split(' ');
      let drinks = baristaArray[2].split(',');

      let barista = {
        name: baristaArray[0],
        shift: baristaArray[1],
        coffees: drinks 
      }

      baristas.push(barista);
   }

   while (counter < input.length && input[counter] !== 'Closed') {
    let operationInfo = input[counter].split(' / ');
    let operation = operationInfo[0];
    let baristaName = operationInfo[1];
    let baristaShift = '';
    let drink = '';
    let findPerson = baristas.find(person => person.name.includes(baristaName));

    switch(operation) {
        case 'Prepare':
            baristaShift = operationInfo[2];
            drink = operationInfo[3];

            if (findPerson.shift === baristaShift && findPerson.coffees.includes(drink)) {
                console.log(`${baristaName} has prepared a ${drink} for you!`);
            } else {
                console.log(`${baristaName} is not available to prepare a ${drink}.`);
            }
        break;
        case 'Change Shift':
            baristaShift = operationInfo[2];
            findPerson.shift = baristaShift;
            console.log(`${baristaName} has updated his shift to: ${baristaShift}`);
        break;
        case 'Learn':
            drink = operationInfo[2];

            if (findPerson.coffees.includes(drink)) {
              console.log(`${baristaName} knows how to make ${drink}.`);
            } else {
                findPerson.coffees.push(drink);
                console.log(`${baristaName} has learned a new coffee type: ${drink}.`);
            }
        break;
    }

    counter++;
   }

   for (let barista of baristas) {
    console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffees.join(', ')}`);
   }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );
solve([
    '4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']
);
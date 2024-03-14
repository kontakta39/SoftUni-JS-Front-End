function solve(input) {
  let array = [];

  for (let i = 0; i < input.length; i++) {
   let currentRecord = input[i].split(' / ');
   let hero = {
    name: currentRecord[0],
    level: currentRecord[1],
    items: currentRecord[2]
   }

   array.push(hero);
  }

  array.sort((a, b) => a.level - b.level);
  for(let item of array) {
    console.log(`Hero: ${item.name}`);
    console.log(`level => ${item.level}`);
    console.log(`items => ${item.items}`);
  }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);
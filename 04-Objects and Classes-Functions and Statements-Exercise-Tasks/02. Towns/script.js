function solve(input) {
  for (let i = 0; i < input.length; i++) {
    let currentTown = input[i].split(' | ');
    let town = {
      townName: currentTown[0],
      latitude: Number(currentTown[1]).toFixed(2),
      longitude: Number(currentTown[2]).toFixed(2)
    }

    console.log(`{ town: '${town.townName}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`);
  }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
solve(['Plovdiv | 136.45 | 812.575']);
function solve(input) {
  let addressBook = {};

  for(let item of input) {
    let currentRecord = item.split(':');
    let name = currentRecord[0];
    let address = currentRecord[1];

    if (addressBook.hasOwnProperty(name)) {
        addressBook[name] = address;
    } else {
        addressBook[name] = address;
    }
  }

  let sortedKeys = Object.keys(addressBook).sort();

  sortedKeys.forEach(key => {
    console.log(`${key} -> ${addressBook[key]}`);
  });
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);
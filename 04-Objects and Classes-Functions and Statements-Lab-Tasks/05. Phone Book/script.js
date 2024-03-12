function solve(input) {
    let phoneBook = {};

    for(let item of input) {
        let currentRecord = item.split(' ');
        let name = currentRecord[0];
        let phoneNumber = currentRecord[1];
        phoneBook[name] = phoneNumber;
    }

    for (let record in phoneBook) {
        console.log(`${record} -> ${phoneBook[record]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);
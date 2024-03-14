function solve(input) {
    for (let i = 0; i < input.length; i++) {
        let person = {
            firstName: input[i], 
            age: input[i].length 
        };

        console.log(`Name: ${person.firstName} -- Personal Number: ${person.age}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);
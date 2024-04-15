function solve(input) {
    let charactersCount = Number(input.shift());
    let charactersArray = [];

    for (let i = 0; i < charactersCount; i++) {
       let currentCharacter = input[0].split(' ');
       let character = {
        name: currentCharacter[0],
        hp: Number(currentCharacter[1]),
        bullets: Number(currentCharacter[2])
       };

       charactersArray.push(character);
       input.shift();
    }

    while(input[0] !== 'Ride Off Into Sunset') {
        let operationInfo = input[0].split(' - ');
        let operation = operationInfo[0];
        let characterName = operationInfo[1];
        let character = charactersArray.find(character => character.name === characterName);

        switch(operation) {
            case 'FireShot':
            let target = operationInfo[2];

            if (character.bullets > 0) {
                character.bullets -= 1;
                console.log(`${character.name} has successfully hit ${target} and now has ${character.bullets} bullets!`);
            } else {
                console.log(`${character.name} doesn't have enough bullets to shoot at ${target}!`);
            }
            break;
            case 'TakeHit':
            let damage = Number(operationInfo[2]);
            let attacker = operationInfo[3];

            character.hp -= damage;

            if (character.hp > 0) {
                console.log(`${character.name} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`);
            } else {
                if (character.hp < 0) {
                    character.hp = 0;
                }

                console.log(`${character.name} was gunned down by ${attacker}!`);
            }
            break;
            case 'Reload':
            if (character.bullets < 6) {
                let reloadedBullets = 6 - character.bullets;
                character.bullets += reloadedBullets;
                console.log(`${character.name} reloaded ${reloadedBullets} bullets!`);
            } else {
                console.log(`${character.name}'s pistol is fully loaded!`);
            }
            break;
            case 'PatchUp':
            let amount = Number(operationInfo[2]);

            if (character.hp < 100) {
                character.hp += amount;

                if (character.hp > 100) {
                    character.hp = 100;
                }

                console.log(`${character.name} patched up and recovered ${amount} HP!`);
            } else {
                console.log(`${character.name} is in full health!`);
            }
            break;
        }

        input.shift();
    }

    for (let item of charactersArray) {
        if (item.hp > 0) {
            console.log(item.name);
            console.log(`HP: ${item.hp}`);
            console.log(`Bullets: ${item.bullets}`);
        } 
    }
}

/*solve(["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"]
);*/
/*solve(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]
);*/
solve(["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"]
);
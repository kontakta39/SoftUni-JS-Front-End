function solve (day, age, cash) {
    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                cash = 12;
            } else if (age > 18 && age <= 64) {
                cash = 18;
            } else if (age > 64 && age <= 122) {
                cash = 12;
            } else {
                console.log('Error!');
                return;
            }
            
            console.log(`${cash}$`);
          break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                cash = 15;
            } else if (age > 18 && age <= 64) {
                cash = 20;
            } else if (age > 64 && age <= 122) {
                cash = 15;
            } else {
                console.log('Error!');
                return;
            }

            console.log(`${cash}$`);
          break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                cash = 5;
            } else if (age > 18 && age <= 64) {
                cash = 12;
            } else if (age > 64 && age <= 122) {
                cash = 10;
            } else {
                console.log('Error!');
                return;
            }

            console.log(`${cash}$`);
        break;
        default:
          console.log('Error!');
      }
}


solve ('Weekday', 42);
solve ('Holiday', -12);
solve ('Holiday', 15);
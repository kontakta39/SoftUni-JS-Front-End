function solve(peopleCount, peopleType, day) {
   let totalPrice = '';

   switch(day) {
    case 'Friday':
        if (peopleType === 'Students') {
            totalPrice = peopleCount * 8.45; 

            if (peopleCount >= 30) {
                totalPrice *= 0.85;
            }
        } else if (peopleType === 'Business') {           
            if (peopleCount >= 100) {
                peopleCount -= 10;
            }

            totalPrice = peopleCount * 10.90;
        } else if (peopleType === 'Regular') {
            totalPrice = peopleCount * 15;

            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
        }
    break;
    case 'Saturday':
        if (peopleType === 'Students') {
            totalPrice = peopleCount * 9.80; 

            if (peopleCount >= 30) {
                totalPrice *= 0.85;
            }
        } else if (peopleType === 'Business') {
            if (peopleCount >= 100) {
                peopleCount -= 10;
            }

            totalPrice = peopleCount * 15.60;
        } else if (peopleType === 'Regular') {
            totalPrice = peopleCount * 20;

            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
        }
     break;
     case 'Sunday':
        if (peopleType === 'Students') {
            totalPrice = peopleCount * 10.46; 

            if (peopleCount >= 30) {
                totalPrice *= 0.85;
            }
        } else if (peopleType === 'Business') {
            if (peopleCount >= 100) {
                peopleCount -= 10;
            }

            totalPrice = peopleCount * 16;
        } else if (peopleType === 'Regular') {
            totalPrice = peopleCount * 22.50;

            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
        }
     break;
   }

   console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday");
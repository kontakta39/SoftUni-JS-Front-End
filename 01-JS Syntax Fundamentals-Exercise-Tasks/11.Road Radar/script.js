function solve(speed, area) {
    const maxMotorwaySpeed = 130;
    const maxInterstateSpeed = 90;
    const maxCitySpeed = 50;
    const maxResidentialSpeed = 20;
    let difference = 0;
    
    switch (area) {
    case 'motorway':
        if (speed > maxMotorwaySpeed) {
           difference = speed - maxMotorwaySpeed;
        
            if (difference <= 20) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxMotorwaySpeed} - speeding`);
            } else if (difference <= 40) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxMotorwaySpeed} - excessive speeding`);
            } else if (difference > 40) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxMotorwaySpeed} - reckless driving`);
            }
            } else {
                console.log(`Driving ${speed} km/h in a ${maxMotorwaySpeed} zone`);
            }
    break;
    case 'interstate':
            if (speed > maxInterstateSpeed) {
               difference = speed - maxInterstateSpeed;
            
            if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxInterstateSpeed} - speeding`);
            } else if (difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxInterstateSpeed} - excessive speeding`);
            } else if (difference > 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxInterstateSpeed} - reckless driving`);
            }
            } else {
            console.log(`Driving ${speed} km/h in a ${maxInterstateSpeed} zone`);
            }
    break;
    case 'city':
    if (speed > maxCitySpeed) {
       difference = speed - maxCitySpeed;
    
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxCitySpeed} - speeding`);
        } else if (difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxCitySpeed} - excessive speeding`);
        } else if (difference > 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxCitySpeed} - reckless driving`);
        }
        } else {
            console.log(`Driving ${speed} km/h in a ${maxCitySpeed} zone`);
        }
    break;
    case 'residential':
        if (speed > maxResidentialSpeed) {
           difference = speed - maxResidentialSpeed;
        
            if (difference <= 20) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxResidentialSpeed} - speeding`);
            } else if (difference <= 40) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxResidentialSpeed} - excessive speeding`);
            } else if (difference > 40) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxResidentialSpeed} - reckless driving`);
            }
            } else {
                console.log(`Driving ${speed} km/h in a ${maxResidentialSpeed} zone`);
            }
    break;        
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
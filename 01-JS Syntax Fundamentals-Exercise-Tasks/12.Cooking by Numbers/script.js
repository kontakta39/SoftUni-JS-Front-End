function solve(inputNumber, operationOne, operationTwo, operationThree, operationFour, operationFive) {
    let number = Number(inputNumber);
    
    switch (operationOne) {
        case 'chop':
            number /= 2;
            console.log(number);
        break;
        case 'dice':
            number = Math.sqrt(number);
            console.log(number);
        break;
        case 'spice':
            number += 1;
            console.log(number);
        break;
        case 'bake':
            number *= 3;
            console.log(number);
        break;
        case 'fillet':
            number *= 0.8;
            console.log(number.toFixed(1));
        break;
    }
    
      switch (operationTwo) {
        case 'chop':
            number /= 2;
            console.log(number);
        break;
        case 'dice':
            number = Math.sqrt(number);
            console.log(number);
        break;
        case 'spice':
            number += 1;
            console.log(number);
        break;
        case 'bake':
            number *= 3;
            console.log(number);
        break;
        case 'fillet':
            number *= 0.8;
            console.log(number.toFixed(1));
        break;
    }
    
      switch (operationThree) {
        case 'chop':
            number /= 2;
            console.log(number);
        break;
        case 'dice':
            number = Math.sqrt(number);
            console.log(number);
        break;
        case 'spice':
            number += 1;
            console.log(number);
        break;
        case 'bake':
            number *= 3;
            console.log(number);
        break;
        case 'fillet':
            number *= 0.8;
            console.log(number.toFixed(1));
        break;
    }
    
      switch (operationFour) {
        case 'chop':
            number /= 2;
            console.log(number);
        break;
        case 'dice':
            number = Math.sqrt(number);
            console.log(number);
        break;
        case 'spice':
            number += 1;
            console.log(number);
        break;
        case 'bake':
            number *= 3;
            console.log(number);
        break;
        case 'fillet':
            number *= 0.8;
            console.log(number.toFixed(1));
        break;
    }
    
      switch (operationFive) {
        case 'chop':
            number /= 2;
            console.log(number);
        break;
        case 'dice':
            number = Math.sqrt(number);
            console.log(number);
        break;
        case 'spice':
            number += 1;
        break;
        case 'bake':
            number *= 3;
            console.log(number);
        break;
        case 'fillet':
            number *= 0.8;
            console.log(number.toFixed(1));
        break;
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
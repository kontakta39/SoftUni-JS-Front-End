function solve(product, quantity) {
    let result = '';
  
    switch (product) {
        case 'coffee':
            result = 1.50 * quantity;
        break;
        case 'water':
            result = 1.00 * quantity;
        break;
        case 'coke':
            result = 1.40 * quantity;
        break;
        case 'snacks':
            result = 2.00 * quantity;
        break;
    }
  
    console.log(result.toFixed(2));
}

solve("water", 5);
solve("coffee", 2);
function solve(...arrays) {
    let productsArray = {};

    arrays.forEach(array => {
        for (let i = 0; i < array.length; i += 2) {
            let productName = array[i];
            let quantity = Number(array[i + 1]);

            if (productsArray.hasOwnProperty(productName)) {
                productsArray[productName] += quantity;
            } else {
                productsArray[productName] = quantity;
            }
        }
    });

  //Loop through the associative array using forEach
    Object.entries(productsArray).forEach(([key, value]) => {
        console.log(key + " -> " + value);
    });
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);
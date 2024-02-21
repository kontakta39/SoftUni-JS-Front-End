function solve (input, area) {
    if (typeof(input) === 'number') {
        area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
}

solve (5);
solve ('name');
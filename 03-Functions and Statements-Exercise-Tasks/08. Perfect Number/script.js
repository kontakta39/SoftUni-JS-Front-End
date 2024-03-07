function solve(number) {
    let sum = CalculatePerfectNumber(number);

    if (sum === number) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    function CalculatePerfectNumber(number) {
        let sum = 1;

        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) { 
                sum += i;

                if (i * i !== number) {
                    sum += number / i;
                }
            }
        }

        return sum;
    }
}

solve(6);
solve(28);
solve(1236498);
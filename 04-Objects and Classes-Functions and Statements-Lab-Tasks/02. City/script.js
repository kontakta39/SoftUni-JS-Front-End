function solve({ name, area, population, country, postCode }) {
    let city = { name, area, population, country, postCode };
    let entries = Object.entries(city);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});
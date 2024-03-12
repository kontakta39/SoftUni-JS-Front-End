function solve(input) {
    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for (let item of input) {
        let currentCat = item.split(' ');
        let catName = currentCat[0];
        let age = currentCat[1]; 
        let cat = new Cat(catName, age);
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
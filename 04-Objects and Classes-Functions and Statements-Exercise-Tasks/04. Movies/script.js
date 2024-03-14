function solve(input) {
    let moviesArray = [];

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split(' ');

        if (currentCommand.includes('addMovie')) {
            let name = currentCommand.slice(1).join(' ').trimEnd();
            let movie = {
                name
            }
        moviesArray.push(movie);
        } else if (currentCommand.includes('directedBy')) {
            const foundDirectedBy = currentCommand.find(element => element === 'directedBy');
            const index = currentCommand.indexOf(foundDirectedBy);
            const currentMovieName = currentCommand.slice(0, index).join(' ').trimEnd();

            for (let item of moviesArray) {
                if (item.name === currentMovieName) {
                    item.director = currentCommand.slice(index + 1).join(' ').trimEnd();
                    break;
                }
            }
        } else if (currentCommand.includes('onDate')) {
            const foundOnDate = currentCommand.find(element => element === 'onDate');
            const index = currentCommand.indexOf(foundOnDate);
            const currentMovieName = currentCommand.slice(0, index).join(' ').trimEnd();

            for (let item of moviesArray) {
                if (item.name === currentMovieName) {
                    item.date = currentCommand.slice(index + 1).join(' ').trimEnd();
                    break;
                }
            }
        }
    }

    moviesArray
    .filter(item => item.director && item.date)
    .forEach(movie => {
         console.log(JSON.stringify(movie));
    });
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);
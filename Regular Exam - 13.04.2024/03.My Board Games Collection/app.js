const baseUrl = 'http://localhost:3030/jsonstore/games/';

const loadGamesButton = document.getElementById('load-games');
const addGameButton = document.getElementById('add-game');
const editGameButton = document.getElementById('edit-game');
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');
let listContainer = document.getElementById('games-list');

loadGamesButton.addEventListener('click', async () => {
    //Deactivate edit game button
    editGameButton.disabled = true;
    updateGameList();
});

//Function to create a game element and attach event listeners
function createGameElement(game, listContainer) {
    let gameDiv = document.createElement('div');
    gameDiv.classList.add('board-game');

    let content = document.createElement('div');
    content.classList.add('content');   

    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = game.name;
    let typeParagraph = document.createElement('p');
    typeParagraph.textContent = game.type;
    let playersParagraph = document.createElement('p');
    playersParagraph.textContent = game.players;

    content.appendChild(nameParagraph);
    content.appendChild(typeParagraph);
    content.appendChild(playersParagraph);

    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-container');

    let changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    gameDiv.appendChild(content);
    gameDiv.appendChild(buttonsDiv);

    listContainer.appendChild(gameDiv);

    //Attach event listener to the dynamically created "Change" button
    changeButton.addEventListener('click', () => {
        nameInputElement.value = game.name;
        typeInputElement.value = game.type;
        playersInputElement.value = game.players;

        //Remove the game from the DOM
        gameDiv.remove();

        //Set up edit game button
        addGameButton.disabled = true;
        editGameButton.disabled = false;

        //Event listener for the "Edit" button
        editGameButton.addEventListener('click', async () => {
            let changedNameInput = nameInputElement.value;
            let changedTypeInput = typeInputElement.value;
            let changedPlayersInput = playersInputElement.value;

            //Make a put request
            const request = await fetch(`${baseUrl}${game._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: game._id,
                    name: changedNameInput,
                    type: changedTypeInput,
                    players: changedPlayersInput,
                })
            });

            if (!request.ok) {
                return;
            }

            clearInput();

            addGameButton.disabled = false;
            editGameButton.disabled = true;

            //Fetch all games
            updateGameList();
        });
    });

    //Event listener for the "Delete" button
    deleteButton.addEventListener('click', async () => {
        //Delete http request
        await fetch(`${baseUrl}${game._id}`, {
            method: 'DELETE'
        });

        //Remove from list
        gameDiv.remove();      
    });
}

//Event listener for the "Add" button
addGameButton.addEventListener('click', async () => {
    let createdNameInput = nameInputElement.value;
    let createdTypeInput = typeInputElement.value;
    let createdPlayersInput = playersInputElement.value;

    const newGame = {
        name: createdNameInput, 
        type: createdTypeInput, 
        players: createdPlayersInput
    };

    //Create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newGame),
    });

    if (!response.ok) {
        return;
    }
    
    clearInput();
    updateGameList();
})

async function updateGameList() {
    // Clear existing game list elements
    listContainer.innerHTML = '';

    // Fetch all games
    let fetchInfo = await fetch(baseUrl);
    let data = await fetchInfo.json();
    let gamesArray = Object.values(data);

    for (let game of gamesArray) {
        createGameElement(game, listContainer);
    }
}

function clearInput() {
    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}
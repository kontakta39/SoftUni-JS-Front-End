const baseUrl = 'http://localhost:3030/jsonstore/gifts/';

const loadPresentsButton = document.getElementById('load-presents');
const addPresentButton = document.getElementById('add-present');
const editPresentButton = document.getElementById('edit-present');
const presentInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');
let listContainer = document.getElementById('gift-list');

loadPresentsButton.addEventListener('click', async () => {
    //Deactivate edit present button
    editPresentButton.disabled = true;
    updatePresentList();
});

//Function to create a present element and attach event listeners
function createPresentElement(present, listContainer) {
    let presentDiv = document.createElement('div');
    presentDiv.classList.add('gift-sock');

    let content = document.createElement('div');
    content.classList.add('content');

    let presentParagraph = document.createElement('p');
    presentParagraph.textContent = present.gift;

    let forParagraph = document.createElement('p');
    forParagraph.textContent = present.for;

    let priceParagraph = document.createElement('p');
    priceParagraph.textContent = present.price;
     
    let changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-container');

    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    content.appendChild(presentParagraph);
    content.appendChild(forParagraph);
    content.appendChild(priceParagraph);
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    presentDiv.appendChild(content);
    presentDiv.appendChild(buttonsDiv);

    listContainer.appendChild(presentDiv);

    //Attach event listener to the dynamically created "Change" button
    changeButton.addEventListener('click', () => {
        presentInputElement.value = present.gift;
        forInputElement.value = present.for;
        priceInputElement.value = present.price;

        //Remove the meal from the DOM
        presentDiv.remove();

        //Set up edit present button
        addPresentButton.disabled = true;
        editPresentButton.disabled = false;

        //Event listener for the "Edit" button
        editPresentButton.addEventListener('click', async () => {
            let changedPresentInput = presentInputElement.value;
            let changedForInput = forInputElement.value;
            let changedPriceInput = priceInputElement.value;

            //Make a put request
            const request = await fetch(`${baseUrl}${present._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: present._id,
                    gift: changedPresentInput,
                    for: changedForInput,
                    price: changedPriceInput,
                })
            });

            if (!request.ok) {
                return;
            }

            clearInput();

            addPresentButton.disabled = false;
            editPresentButton.disabled = true;

            updatePresentList();
        });
    });

    //Event listener for the "Delete" button
    deleteButton.addEventListener('click', async () => {
        //Delete http request
        await fetch(`${baseUrl}${present._id}`, {
            method: 'DELETE'
        });

        //Remove from list
        presentDiv.remove();      
    });
}

//Event listener for the "Add" button
addPresentButton.addEventListener('click', async () => {
    let createdPresentInput = presentInputElement.value;
    let createdForInput = forInputElement.value;
    let createdPriceInput = priceInputElement.value;

    const newPresent = {
        gift: createdPresentInput, 
        for: createdForInput, 
        price: createdPriceInput
    };

    //Create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newPresent),
    });

    if (!response.ok) {
        return;
    }
    
    clearInput();
    updatePresentList();
})

async function updatePresentList() {
    // Clear existing present list elements
    listContainer.innerHTML = '';

    // Fetch all presents
    let response = await fetch(baseUrl);
    let data = await response.json();
    let presentsArray = Object.values(data);

    for (let present of presentsArray) {
        createPresentElement(present, listContainer);
    }
}

function clearInput() {
    presentInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}
const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadMealsButton = document.getElementById('load-meals');
const addMealButton = document.getElementById('add-meal');
const editMealButton = document.getElementById('edit-meal');
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');
let listContainer = document.getElementById('list');
let response = null;
let data = null;
let dishesArray = null;

loadMealsButton.addEventListener('click', async () => {
    //Deactivate edit meal button
    editMealButton.disabled = true;
    updateMealList();
});

//Function to create a meal element and attach event listeners
function createMealElement(dish, listContainer) {
    let mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');

    let foodName = document.createElement('h2');
    foodName.textContent = dish.food;

    let time = document.createElement('h3');
    time.textContent = dish.time;

    let calories = document.createElement('h3');
    calories.textContent = dish.calories;

    let buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'meal-buttons';

    let changeButton = document.createElement('button');
    changeButton.classList.add('change-meal');
    changeButton.textContent = 'Change';

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-meal');
    deleteButton.textContent = 'Delete';

    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    mealDiv.appendChild(foodName);
    mealDiv.appendChild(time);
    mealDiv.appendChild(calories);
    mealDiv.appendChild(buttonsDiv);

    listContainer.appendChild(mealDiv);

    //Attach event listener to the dynamically created "Change" button
    changeButton.addEventListener('click', () => {
        foodInputElement.value = dish.food;
        timeInputElement.value = dish.time;
        caloriesInputElement.value = dish.calories;

        //Remove the meal from the DOM
        mealDiv.remove();

        //Set up edit meal button
        addMealButton.disabled = true;
        editMealButton.disabled = false;

        //Event listener for the "Edit" button
        editMealButton.addEventListener('click', async () => {
            let changedFoodInput = foodInputElement.value;
            let changedTimeInput = timeInputElement.value;
            let changedCaloriesInput = caloriesInputElement.value;

            //Make a put request
            const request = await fetch(`${baseUrl}/${dish._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: dish._id,
                    food: changedFoodInput,
                    time: changedTimeInput,
                    calories: changedCaloriesInput,
                })
            });

            if (!request.ok) {
                return;
            }

            clearInput();

            //Meal buttons
            addMealButton.disabled = false;
            editMealButton.disabled = true;

            //Fetch all meals
            updateMealList();
        });
    });

    //Event listener for the "Delete" button
    deleteButton.addEventListener('click', async () => {
        //Delete http request
        await fetch(`${baseUrl}/${dish._id}`, {
            method: 'DELETE'
        });

        //Remove from list
        mealDiv.remove();      
    });
}

//Event listener for the "Add" button
addMealButton.addEventListener('click', async () => {
    let createdFoodInput = foodInputElement.value;
    let createdTimeInput = timeInputElement.value;
    let createdCaloriesInput = caloriesInputElement.value;

    const newMeal = {
        food: createdFoodInput, 
        time: createdTimeInput, 
        calories: createdCaloriesInput
    };

    //Create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newMeal),
    });

    if (!response.ok) {
        return;
    }
    
    clearInput();
    updateMealList();
})

async function updateMealList() {
    // Clear existing meal list elements
    document.getElementById('list').innerHTML = '';

    // Fetch all meals
    let response = await fetch(baseUrl);
    let data = await response.json();
    let dishesArray = Object.values(data);

    for (let dish of dishesArray) {
        createMealElement(dish, listContainer);
    }
}

function clearInput() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}
window.addEventListener("load", solve);

function solve() {
    let placeInput = document.getElementById('place');
    let actionInput = document.getElementById('action');
    let personInput = document.getElementById('person');
    let addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', () => {
       addButtonClick(placeInput, actionInput, personInput);
    })

    function addButtonClick(placeInput, actionInput, personInput) {
        if (placeInput.value !== '' && actionInput.value !== '' && personInput.value !== '') {
            let currentPlace = placeInput.value;
            let currentAction = actionInput.value;
            let currentPerson = personInput.value;

            let listItem = document.createElement('li');
            listItem.classList.add('clean-task');

            let article = document.createElement('article');

            let placeParagraph = document.createElement('p');
            placeParagraph.textContent = `Place:${currentPlace}`;

            let actionParagraph = document.createElement('p');
            actionParagraph.textContent = `Action:${currentAction}`;

            let personParagraph = document.createElement('p');
            personParagraph.textContent = `Person:${currentPerson}`;

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');

            let doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.className = 'done';

            let buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('buttons');
            buttonsDiv.appendChild(editButton);
            buttonsDiv.appendChild(doneButton);

            article.appendChild(placeParagraph);
            article.appendChild(actionParagraph);
            article.appendChild(personParagraph);

            listItem.appendChild(article);
            listItem.appendChild(buttonsDiv);

            let taskList = document.getElementById('task-list');
            taskList.appendChild(listItem);

            editButton.addEventListener('click', () => {
                editButtonClick(currentPlace, currentAction, currentPerson, listItem);
            })

            doneButton.addEventListener('click', () => {
                doneButtonClick(currentPlace, currentAction, currentPerson, listItem);
            })
        }

        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';
    }

    function editButtonClick(currentPlace, currentAction, currentPerson, listItem) {
        listItem.remove();
        placeInput.value = currentPlace;
        actionInput.value = currentAction;
        personInput.value = currentPerson;
    }

    function doneButtonClick(currentPlace, currentAction, currentPerson, listItem) {
        listItem.remove();
        let doneListItem = document.createElement('li');

        let article = document.createElement('article');

        let placeParagraph = document.createElement('p');
        placeParagraph.textContent = `Place:${currentPlace}`;

        let actionParagraph = document.createElement('p');
        actionParagraph.textContent = `Action:${currentAction}`;

        let personParagraph = document.createElement('p');
        personParagraph.textContent = `Person:${currentPerson}`;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        article.appendChild(placeParagraph);
        article.appendChild(actionParagraph);
        article.appendChild(personParagraph);

        doneListItem.appendChild(article);
        doneListItem.appendChild(deleteButton);

        let doneTaskList = document.getElementById('done-list');
        doneTaskList.appendChild(doneListItem);

        deleteButton.addEventListener('click', () => {
            doneListItem.remove();
        })
    }
}
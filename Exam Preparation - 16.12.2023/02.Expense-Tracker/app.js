window.addEventListener("load", solve);

function solve() {
    let addButton = document.getElementById('add-btn');
    let deleteButton = document.querySelector('.btn.delete');

    addButton.addEventListener('click', () => {
        let expenseType = document.getElementById('expense');
        let amount = document.getElementById('amount');
        let date = document.getElementById('date');

        if (expenseType.value === '' || amount.value === '' || date.value === '') {
            return;
        }  

        let previewList = document.getElementById('preview-list');      
        //Create new list item
        let listItem = document.createElement('li');
        listItem.classList.add('expense-item'); 
        //Create article element
        let article = document.createElement('article');
        //Create paragraph elements for each detail
        let expenseParagraph = document.createElement('p');
        expenseParagraph.textContent = `Type: ${expenseType.value}`;

        let amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amount.value}$`;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${date.value}`;

        //Create div for buttons
        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        //Create Edit button
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'edit'); 

        //Create Ok button
        let okButton = document.createElement('button');
        okButton.textContent = 'Ok';
        okButton.classList.add('btn', 'ok');

        //Append paragraph elements to article
        article.appendChild(expenseParagraph);
        article.appendChild(amountParagraph);
        article.appendChild(dateParagraph);
        //Append article to list item
        listItem.appendChild(article);
        //Append buttons to div
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(okButton);
        //Append buttonsDiv to preview list
        listItem.appendChild(buttonsDiv);
        //Append list item to preview list
        previewList.appendChild(listItem);

        //Disable the Add button
        addButton.disabled = true;

        let expenseTypeToEdit = expenseType.value;
        let amountToEdit = amount.value;
        let dateToEdit = date.value;
        //Clear the input fields
        expenseType.value = '';
        amount.value = '';
        date.value = '';

        editButton.addEventListener('click', () => {
            addButton.disabled = false;
            document.getElementById('expense').value = expenseTypeToEdit;
            document.getElementById('amount').value = amountToEdit;
            document.getElementById('date').value = dateToEdit;
            listItem.remove();
        })

        okButton.addEventListener('click', () => {
            let expensesList = document.getElementById('expenses-list'); 
            buttonsDiv.remove();
            expensesList.appendChild(listItem);
        })
    })
   
    deleteButton.addEventListener('click', () => {
        window.location.reload();
    })
}
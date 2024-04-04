function addItem() {
    let textToAdd = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = textToAdd;
    ulElement.appendChild(li);

    // Clearing the input
    document.getElementById('newItemText').value = '';
}
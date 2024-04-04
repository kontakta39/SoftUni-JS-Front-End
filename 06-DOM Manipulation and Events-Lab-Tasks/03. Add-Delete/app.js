function addItem() {
    let textToAdd = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = textToAdd;

    // Create delete link
    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#'; // Set href to '#' for better UX (not to redirect)
    deleteLink.addEventListener('click', function(event) {
        ulElement.removeChild(li); // Remove the corresponding list item
    })

    // Append delete link to list item
    li.appendChild(deleteLink);

    // Append list item to unordered list
    ulElement.appendChild(li);

    // Clearing the input
    document.getElementById('newItemText').value = '';
}
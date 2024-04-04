function deleteByEmail() {
    let emailInput = document.getElementsByName('email')[0].value;
    // Get the table element
    let table = document.querySelector('#customers');
    // Get all cells within the tbody
    let tbodyCells = table.querySelectorAll('tbody tr');
    let found = null;

    for (let tr of tbodyCells) {
        if (tr.textContent.includes(emailInput)) {
           found = tr;
           break;
        }
     }
    
     if (found !== null) {
     found.parentNode.removeChild(found); // Remove the row from its parent node
     let result = document.getElementById('result');
     result.textContent = 'Deleted.';
     } else {
        let result = document.getElementById('result');
        result.textContent = 'Not found.';
     }
}
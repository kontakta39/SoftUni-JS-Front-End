function generateReport() {
    let checkboxes = document.querySelectorAll('thead input[type="checkbox"]');
    let checkedIndices = [];
    let data = [];
    let index = -1;

    for (let checkbox of checkboxes) {
        index++;
        
        if (checkbox.checked) {
            let name = checkbox.name;

            let currentCheckbox = {
                name,
                index
            }

            checkedIndices.push(currentCheckbox);
        }
    };

    let tbody = document.querySelector('tbody');
    let rows = tbody.querySelectorAll('tr');

    for (let row of rows) {
        let rowData = {};

        for (let checkbox of checkedIndices) {
            let cells = row.querySelectorAll('td');
            let cellData = cells[checkbox.index].textContent.trim();
            rowData[checkbox.name] = cellData;
        };

        data.push(rowData);
    };

    let jsonData = JSON.stringify(data, null, 2);
    let textarea = document.getElementById('output');
    textarea.textContent = jsonData;
}
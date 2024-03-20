function sumTable() {
    let sum = 0;
    let rows = document.querySelectorAll("table tbody tr");

    for (let row of rows) {
        let cells = row.getElementsByTagName('td');

        for (let item of cells) {
            let currentElement = Number(item.textContent);

            if (!isNaN(currentElement)) {
                sum += currentElement
            }
        }
    }

    let sumElement = document.getElementById("sum");
    sumElement.textContent = sum;
}
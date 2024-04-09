function solve() {
    const generateButton = document.querySelector('button:nth-of-type(1)');
    const buyButton = document.querySelector('button:nth-of-type(2)');

    generateButton.addEventListener('click', function() {
        const textareaInput = document.querySelector('textarea[rows="5"]').value;
        const parsedData = JSON.parse(textareaInput);

        for (let item of parsedData) {
            // Accessing values
            const name = item.name;
            const img = item.img;
            const price = item.price;
            const decFactor = item.decFactor;

            // Create a new table row element
            const newRow = document.createElement('tr');

            // Create table data cells for each column
            const imgCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const decFactorCell = document.createElement('td');
            const markCell = document.createElement('td');

            // Create an image element
            const imgElement = document.createElement('img');
            imgElement.src = img;

            // Create paragraph elements for name, price, and decoration factor
            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = name;
            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = price;
            const decFactorParagraph = document.createElement('p');
            decFactorParagraph.textContent = decFactor;

            // Create a checkbox input
            const checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';

            // Append elements to their respective cells
            imgCell.appendChild(imgElement);
            nameCell.appendChild(nameParagraph);
            priceCell.appendChild(priceParagraph);
            decFactorCell.appendChild(decFactorParagraph);
            markCell.appendChild(checkboxInput);

            // Append cells to the new row
            newRow.appendChild(imgCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(priceCell);
            newRow.appendChild(decFactorCell);
            newRow.appendChild(markCell);

            // Get the table body
            const tbody = document.querySelector('.table tbody');

            // Append the new row to the table body
            tbody.appendChild(newRow);
        }
    });

    buyButton.addEventListener('click', function() { 
        let furnitureArray = [];
        let furnitureCount = 0;
        let totalPrice = 0;
        let avgDecorationFactor = 0;
        let result = '';
        const checkboxes = document.querySelectorAll('.table tbody input[type="checkbox"]');

        for (const checkbox of checkboxes) {
            //Check if the checkbox is checked
            if (checkbox.checked) {
                //Access the table row (parent node of the checkbox)
                const row = checkbox.parentNode.parentNode;
        
                //Retrieve product information from row's sibling cells
                const name = row.querySelector('td:nth-of-type(2) p').textContent;
                const price = Number(row.querySelector('td:nth-of-type(3) p').textContent);
                const decFactor = Number(row.querySelector('td:nth-of-type(4) p').textContent);

                furnitureArray.push(name);
                furnitureCount++;
                totalPrice += price;
                avgDecorationFactor += decFactor;
            }
        }

        avgDecorationFactor /= furnitureCount;
        result += `Bought furniture: ${furnitureArray.join(', ')}` + '\n' + `Total price: ${totalPrice.toFixed(2)}` + '\n' + `Average decoration factor: ${avgDecorationFactor}`;
        document.querySelector('textarea[rows="4"][disabled]').value = result;
    })
}
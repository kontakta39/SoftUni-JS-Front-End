function colorize() {
    /*let rows = document.querySelectorAll('table tr');

    for (let i = 0; i < rows.length; i++) { 
        if (i % 2 !== 0) { 
            let cells = rows[i].getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) { 
                cells[j].style.backgroundColor = 'teal';
            }
        }
    }*/

    let rows = document.querySelectorAll("table tr");
    let index = 0;
    
    for (let row of rows) {
        index++;
        if (index % 2 == 0) {
            row.style.background = "teal";
        }
    }
}
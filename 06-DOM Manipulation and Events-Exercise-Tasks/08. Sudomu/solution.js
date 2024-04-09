function solve() {
    let buttons = document.querySelectorAll('button');
    let inputElements = document.querySelectorAll('table tbody input[type="number"]');
    // Convert NodeList to Array
    inputElements = Array.from(inputElements);
    
    for (let button of buttons) {
        let buttonText = button.textContent;
        
        if (buttonText === 'Quick Check') {
            button.addEventListener('click', function() {
                let inputElementsCopy = inputElements.slice();
                for (let t = 0; t < inputElements.length; t+=3) {
                    if (inputElements[t].value === inputElements[t+1].value || inputElements[t].value === inputElements[t+2].value || inputElements[t+1] === inputElements[t+2]) {
                        document.querySelector('table').style.border = '2px solid red';
                        document.querySelector('#check p').style.color = 'red';
                        document.querySelector('#check p').textContent = 'NOP! You are not done yet...';
                        return;   
                    }
                }

                for (let z = 0; z < inputElements.length; z++) {
                    let currentElement = inputElements[z].value;
                    if (z === 0) {
                       inputElementsCopy.splice(0, 3);
                    } else if (z === 3) {
                       inputElementsCopy = inputElements.slice();
                       inputElementsCopy.splice(3, 3);
                    } else if (z === 6) {
                       inputElementsCopy = inputElements.slice();
                       inputElementsCopy.splice(6, 3);
                    }

                    let count = 0;

                    for(let v = 0; v < inputElementsCopy.length; v++) {     
                        if (currentElement === inputElementsCopy[v].value) {
                            if (z === v) {
                                document.querySelector('table').style.border = '2px solid red';
                                document.querySelector('#check p').style.color = 'red';
                                document.querySelector('#check p').textContent = 'NOP! You are not done yet...';
                                return;   
                            }

                            count++;
                        }
                    }

                    if (count <= 1 || count >= 3) {
                        document.querySelector('table').style.border = '2px solid red';
                        document.querySelector('#check p').style.color = 'red';
                        document.querySelector('#check p').textContent = 'NOP! You are not done yet...';
                        return;
                    }
                }

                document.querySelector('table').style.border = '2px solid green';
                document.querySelector('#check p').style.color = 'green';
                document.querySelector('#check p').textContent = 'You solve it! Congratulations!';
            })
        } else if (buttonText === 'Clear') {
            button.addEventListener('click', function() {
                // Loop through all input elements and set their values to an empty string
                for (let item of inputElements) {
                    item.value = '';
                };
                
                // Clear the text content and styling in the check paragraph
                let checkParagraph = document.querySelector('#check p');
                checkParagraph.textContent = '';
                checkParagraph.style.color = '';
                
                // Reset the table border to its default style
                document.querySelector('table').style.border = '';
            })
        }
    }
}
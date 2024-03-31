function solve() {
    let select = document.getElementById("selectMenuTo");
    // Create options for Binary and Hexadecimal
    let binaryOption = document.createElement("option");
    binaryOption.text = 'Binary';
    binaryOption.value = 'binary';
    select.appendChild(binaryOption);

    let hexadecimalOption = document.createElement("option");
    hexadecimalOption.text = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';
    select.appendChild(hexadecimalOption);

    document.getElementsByTagName('button')[0].addEventListener("click", convert);

    function convert() {
        document.getElementById('result').value = ''; // Clear previous result
        let numberToConvert = Number(document.getElementById('input').value); // Move inside the convert function
        let select = document.getElementById("selectMenuTo");
        let selectedIndex = select.selectedIndex;
        let selectedOptionValue = select.options[selectedIndex].value;
    
        if (selectedOptionValue === 'binary') {
            let binaryNumber = numberToConvert.toString(2);
            let result = document.getElementById('result');
            result.value = binaryNumber;
        } else if (selectedOptionValue === 'hexadecimal') {
            let hexadecimalNumber = numberToConvert.toString(16).toUpperCase();
            let result = document.getElementById('result');
            result.value = hexadecimalNumber;
        }
    }
}
function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let sum = firstNumber - secondNumber;
    let result = document.getElementById('result');
    result.textContent = sum;
}
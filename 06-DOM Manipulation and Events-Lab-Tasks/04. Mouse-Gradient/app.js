function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient-box');
    let result = document.getElementById('result');

    //Event listener for mousemove on the gradient box
    gradientBox.addEventListener('mousemove', function(event) {
        // Calculate the percentage of mouse position relative to the width of the gradient box
        let power = event.offsetX / (event.target.clientWidth - 1);
        // Round down the percentage
        power = Math.trunc(power * 100);
        // Display the percentage
        result.textContent = `${power}%`;
    });

    gradientBox.addEventListener('mouseout', function(event) {
        document.getElementById('result').textContent = "";
    });
}
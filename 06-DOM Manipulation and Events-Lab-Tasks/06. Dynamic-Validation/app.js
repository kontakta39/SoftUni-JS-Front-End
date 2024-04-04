function validate() {
    let text = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    text.addEventListener('change', (event) => {
        if (!pattern.test(event.target.value)) {
            // If the input value does not match the pattern
            text.classList.add('error');
        } else {
            text.classList.remove('error');
        }
    });
}
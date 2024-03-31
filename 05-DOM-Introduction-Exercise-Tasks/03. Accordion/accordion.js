function toggle() {
    let action = document.querySelector('.button');
    let information = document.getElementById('extra');

    if (action.textContent === 'More') {
        information.style.display = 'block';
        action.textContent = 'Less';
    } else {
        information.style.display = 'none';
        action.textContent = 'More';
    }
}
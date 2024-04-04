function focused() {
    let inputElements = document.querySelectorAll('div div input');

    for (let element of inputElements) {
        element.addEventListener('focus', e => {
            // set 'focused' class for click event element
            e.target.parentNode.classList.add('focused');            
        });

        element.addEventListener('blur', e => {
            // remove 'focused' class
            e.target.parentNode.classList.remove('focused');
        });
    }
}
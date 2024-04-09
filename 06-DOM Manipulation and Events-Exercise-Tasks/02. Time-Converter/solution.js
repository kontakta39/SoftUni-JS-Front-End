function attachEventsListeners() {
    const inputFields = document.querySelectorAll('input[type="text"]');
    const convertButtons = document.querySelectorAll('input[type="button"]');

    for (let button of convertButtons) {
        button.addEventListener('click', function() {
            let inputValue = 0;
            let selectedId = '';
            let days = 0;
            let hours = 0;
            let minutes = 0; 
            let seconds = 0;

            //Find the non-empty input field and its value
            for (let input of inputFields) {
                if (input.value !== '') {
                    inputValue = parseFloat(input.value);
                    selectedId = input.id;
                    break;
                }
            }

            switch (selectedId) {
                case 'days':
                    days = inputValue;
                    hours = days * 24;
                    minutes = hours * 60;
                    seconds = minutes * 60;
                    break;
                case 'hours':
                    hours = inputValue;
                    days = hours / 24;
                    minutes = hours * 60;
                    seconds = minutes * 60;
                    break;
                case 'minutes':
                    minutes = inputValue;
                    hours = minutes / 60;
                    days = hours / 24;
                    seconds = minutes * 60;
                    break;
                case 'seconds':
                    seconds = inputValue;
                    minutes = seconds / 60;
                    hours = minutes / 60;
                    days = hours / 24;
                    break;
                default:
                    break;
            }

            document.getElementById('days').value = days;
            document.getElementById('hours').value = hours;
            document.getElementById('minutes').value = minutes;
            document.getElementById('seconds').value = seconds;
        });
    }
}
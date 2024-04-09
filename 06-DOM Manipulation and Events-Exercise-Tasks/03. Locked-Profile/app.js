function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');

    for (let i = 0; i < profiles.length; i++) {
        let profile = profiles[i];
            let button = profile.querySelector('button');
            let hiddenFieldsDiv = document.getElementById('user' + (i + 1) + 'HiddenFields');

            button.addEventListener('click', function() {
                radioBtn = profile.querySelector('input[type="radio"]:checked');

                if (radioBtn.value === 'unlock') {
                    if (hiddenFieldsDiv.style.display === 'none' || hiddenFieldsDiv.style.display === '') {
                        hiddenFieldsDiv.style.display = 'block';
                        button.textContent = 'Hide it';
                    } else {
                        hiddenFieldsDiv.style.display = 'none';
                        button.textContent = 'Show more';
                    }
                }
        });
    }
}
function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
   
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        button.addEventListener('click', function() {
            let result = '';
            //Access the textarea element
            let textarea = document.querySelectorAll('textarea')[i].value;

            if (button.textContent === 'Encode and send it') {
              for (let t = 0; t < textarea.length; t++) {
                //Get the ASCII code of the letter
                let charCode = textarea.charCodeAt(t);
                //Increment the ASCII code by 1
                let newCharCode = charCode + 1;
                //Convert the new ASCII code back to a character and add it to the result string
                result += String.fromCharCode(newCharCode);
                document.querySelectorAll('textarea')[i+1].value = result;
                document.querySelectorAll('textarea')[i].value = '';
              }

            } else if (button.textContent === 'Decode and read it') {
                for (let t = 0; t < textarea.length; t++) {
                    let charCode = textarea.charCodeAt(t);
                    let newCharCode = charCode - 1;
                    result += String.fromCharCode(newCharCode);
                    document.querySelectorAll('textarea')[i].value = result;
                }
            }
        })
    }
}
function solve(text) {
    let charArray = text.split('');
    let flagLength = false;
    let flagLettersDigitsCheck = false;
    let digitsCountCheck = false;

    if (charArray.length >= 6 && charArray.length <= 10) {
        flagLength = true;
    } else {
        console.log(`Password must be between 6 and 10 characters`);
    }

    flagLettersDigitsCheck = lettersDigits(charArray);

    if (flagLettersDigitsCheck === false) {
      console.log(`Password must consist only of letters and digits`);
    }

    digitsCountCheck = digitsCount(charArray);

    if (digitsCountCheck === false) {
        console.log(`Password must have at least 2 digits`);
    }
    
    if (flagLength && flagLettersDigitsCheck && digitsCountCheck) {
        console.log(`Password is valid`);
    }

    function lettersDigits(array) {
        let flag = false;
    
        for (let i = 0; i < array.length; i++) {
            let asciiCode = array[i].charCodeAt(0);
    
            if (asciiCode >= 48 && asciiCode <= 57 || asciiCode >= 65 && asciiCode <= 90 || 
                asciiCode >= 97 && asciiCode <= 122) {
                    flag = true;
                } else {
                    return flag = false;
            }
        }
    
        return flag;
     }
    
     function digitsCount(array) {
        let count = 0;
        let flag = false;
    
        for (let i = 0; i < array.length; i++) {
            let asciiCode = array[i].charCodeAt(0);
    
            if (asciiCode >= 48 && asciiCode <= 57) {
                count++;
            } 
        }
    
        if (count >= 2) {
            flag = true;
        }
    
        return flag;
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');
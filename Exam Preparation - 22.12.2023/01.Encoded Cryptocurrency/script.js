function solve(input) {
    let currentString = input.shift();
   
    while(input[0] !== 'Buy') {
        let operationInfo = input[0].split('?');
        let operation = operationInfo[0];
        let substring = '';
        let replacement = '';
       
        switch(operation) {
            case 'TakeEven':
              let modifiedString = '';
              for (let i = 0; i < currentString.length; i++) {
                  if (i % 2 === 0) {
                      modifiedString += currentString[i];
                  }
              }          
             
              currentString = modifiedString;
              console.log(currentString);
            break;
            case 'ChangeAll':
              substring = operationInfo[1];
              replacement = operationInfo[2];
                  
                if(currentString.includes(substring)){
                    while(currentString.includes(substring)){
                        currentString = currentString.replace(substring, replacement);
                    }
                } 
              console.log(currentString);
            break;  
            case 'Reverse':
             substring = operationInfo[1];

             if(currentString.includes(substring)){
                currentString = currentString.replace(substring, '');
                let reversedString = substring.split('').reverse().join('');
                currentString = currentString + reversedString;
                console.log(currentString);
             }else{
                console.log('error');
             }
            break;
        }
       
        input.shift();
    }
   
    console.log(`The cryptocurrency is: ${currentString}`);
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"]));

solve((["PZDfA2PkAsakhnefZ7aZ",
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"]));
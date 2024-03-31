function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let namingConvention = document.getElementById('naming-convention').value;
  let transformedWord = document.getElementById('result');
  let result = '';
  let textArray = text.split(' ');

  if (namingConvention === 'Camel Case') {
    for (let i = 1; i < textArray.length; i++) {
    textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
    }

    result = textArray.join('');
  } else if (namingConvention === 'Pascal Case') {
    for (let i = 0; i < textArray.length; i++) {
      textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
    }

    result = textArray.join('');
  } else {
    result = 'Error!'
  }
   
  transformedWord.textContent = result;
}
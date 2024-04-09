function attachEventsListeners() {
    let button = document.getElementById('convert');
   
    button.addEventListener('click', function() {
      let distanceToConvert = Number(document.getElementById('inputDistance').value);
      let inputUnitsArray = document.getElementById('inputUnits');
      let outputUnitsArray = document.getElementById('outputUnits');
      let currentInputUnit = inputUnitsArray.options[inputUnitsArray.selectedIndex].text;
      let currentOutputUnit = outputUnitsArray.options[outputUnitsArray.selectedIndex].text;
      let convertToMeters = 0;
      let result = 0;
     
      switch (currentInputUnit) {
         case 'Kilometers':
         convertToMeters = distanceToConvert * 1000;
         break;
         case 'Meters':
         convertToMeters = distanceToConvert;
         break;
         case 'Centimeters':
         convertToMeters = distanceToConvert / 100;
         break;
         case 'Millimeters':
         convertToMeters = distanceToConvert / 1000;
         break;
         case 'Miles':
         convertToMeters = distanceToConvert * 1609.34;
         break;
         case 'Yards':
         convertToMeters = distanceToConvert * 0.9144;
         break;
         case 'Feet':
         convertToMeters = distanceToConvert * 0.3048;
         break;
         case 'Inches':
         convertToMeters = distanceToConvert * 0.0254;
         break;
      }
     
      switch (currentOutputUnit) {
        case 'Kilometers':
          result = convertToMeters / 1000;
        break;
        case 'Meters':
          result = convertToMeters;
        break;
        case 'Centimeters':
          result = convertToMeters * 100;
        break;
        case 'Millimeters':
          result = convertToMeters * 1000;
        break;
        case 'Miles':
          result = convertToMeters / 1609.34;
        break;
        case 'Yards':
          result = convertToMeters / 0.9144;
        break;
        case 'Feet':
          result = convertToMeters / 0.3048;
        break;
        case 'Inches':
         result = convertToMeters / 0.0254;
        break;
      }
     
      document.getElementById('outputDistance').value = result;
    })
}
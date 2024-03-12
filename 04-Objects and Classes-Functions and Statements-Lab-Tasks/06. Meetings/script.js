function solve(input) {
    let meetings = {};
  
    for (let item of input) {
      let currentRecord = item.split(' ');
      let day = currentRecord[0];
      let personName = currentRecord[1];
  
      if (meetings.hasOwnProperty(day)) {
        console.log(`Conflict on ${day}!`);
      } else {
        console.log(`Scheduled for ${day}`);
        meetings[day] = personName;
      }
    }
  
    for (let day in meetings) {
      console.log(`${day} -> ${meetings[day]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);
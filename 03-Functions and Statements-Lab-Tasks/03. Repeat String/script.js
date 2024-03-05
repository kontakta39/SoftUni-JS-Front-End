function solve(text, count) {
    let result = '';
  
    for (let i = 1; i <= count; i++) {
      result += text;
    }
  
    console.log(result);
}
  
  solve("abc", 3);
  solve("String", 2);
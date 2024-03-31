function search() {
  let townsArray = Array.from(document.querySelectorAll('#towns li'));
  let searchedText = document.getElementById('searchText').value;
  let resultCount = document.getElementById('result'); 
  let count = 0;

   // Clear previous search results
   townsArray.forEach(li => {
      li.style.fontWeight = 'normal';
      li.style.textDecoration = 'none';
   });

  for (let item of townsArray) {
   if (item.textContent.includes(searchedText)) {
      item.style.fontWeight = 'bold';
      item.style.textDecoration = 'underline';
      count++;
   }
  }

  resultCount.textContent = `${count} matches found`;
}
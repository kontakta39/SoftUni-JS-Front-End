function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
       let searchedText = document.getElementById('searchField').value;
       // Get the table element
       let table = document.querySelector('.container');
       // Get all cells within the tbody
       let tbodyCells = table.querySelectorAll('tbody tr');

       for (let tr of tbodyCells) {
         tr.classList.remove('select');
      }

      for (let tr of tbodyCells) {
         if (tr.textContent.includes(searchedText)) {
            tr.classList.add('select');
         }
      }

       searchedText = '';
   }
}
function create(words) {
   for (let i = 0; i < words.length; i++) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      const textNode = document.createTextNode(words[i]);
      paragraph.appendChild(textNode);
      div.appendChild(paragraph);
      paragraph.style.display = 'none';

      div.addEventListener('click', function() {
         if (paragraph.style.display === 'none') {
           paragraph.style.display = 'block'; // Show the paragraph
         } else {
           paragraph.style.display = 'none'; // Hide the paragraph
         }
       });

       document.getElementById('content').appendChild(div);
   }
}
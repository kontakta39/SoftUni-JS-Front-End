window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    let nameInput = null;
    let phoneInput = null;
    let categoryInput = null;
    let categoryInputValue = '';

    addButton.addEventListener('click', () => {
      nameInput = document.getElementById('name');
      phoneInput = document.getElementById('phone');
      categoryInput = document.getElementById('category');
      categoryInputValue = categoryInput.options[categoryInput.selectedIndex].value;

      let currentName = nameInput.value;
      let currentPhone = phoneInput.value;
      let currentCategory = categoryInputValue;

      if (currentName !== '' && currentPhone !== '' && currentCategory !== '') {
        let liElement = document.createElement('li');
        let article = createElements(currentName, currentPhone, currentCategory);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        let saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');

        let divElement = document.createElement('div');
        divElement.classList.add('buttons');
        divElement.appendChild(editButton);
        divElement.appendChild(saveButton);

        liElement.appendChild(article);
        liElement.appendChild(divElement);

        let ulElement = document.getElementById('check-list');
        ulElement.appendChild(liElement);

        nameInput.value = '';
        phoneInput.value = '';
        categoryInput.selectedIndex = 0;

        editButton.addEventListener('click', () => {
          editButtonClick(currentName, currentPhone, currentCategory, liElement);
        })

        saveButton.addEventListener('click', () => {
          saveButtonClick(currentName, currentPhone, currentCategory, liElement);
        })
      }
    })

    function editButtonClick(currentName, currentPhone, currentCategory, liElement) {
      liElement.remove();
      nameInput.value = currentName;
      phoneInput.value = currentPhone;
      
      //Loop through each option
      for (var i = 0; i < categoryInput.options.length; i++) {
          //Check if the option's value matches the desired value
          if (categoryInput.options[i].value === currentCategory) {
              // Set the selected attribute to true if it's a match
              categoryInput.options[i].selected = true;
              // Break the loop since we found the desired option
              break;
          }
      }
    }

    function saveButtonClick(currentName, currentPhone, currentCategory, liElement) {
      liElement.remove();
      let savedliElement = document.createElement('li');
      let article = createElements(currentName, currentPhone, currentCategory);

      let deleteButton = document.createElement('button');
      deleteButton.classList.add('del-btn');

      savedliElement.appendChild(article);
      savedliElement.appendChild(deleteButton);

      let ulElement = document.getElementById('contact-list');
      ulElement.appendChild(savedliElement);

      deleteButton.addEventListener('click', () => {
        savedliElement.remove();
      })

      nameInput.value = '';
      phoneInput.value = '';
      categoryInput.selectedIndex = 0;
    }

    function createElements(currentName, currentPhone, currentCategory) {
      let article = document.createElement('article');

      let nameParagraph = document.createElement('p');
      nameParagraph.textContent = `name:${currentName}`;
      let phoneParagraph = document.createElement('p');
      phoneParagraph.textContent = `phone:${currentPhone}`;
      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = `category:${currentCategory}`;

      article.appendChild(nameParagraph);
      article.appendChild(phoneParagraph);
      article.appendChild(categoryParagraph);

      return article;
    }
}
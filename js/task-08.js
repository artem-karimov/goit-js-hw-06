'use strict';

const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();

  const fields = {};

  for (const { tagName, name, value } of formElement.elements) {
    if (tagName === 'INPUT') {
      if (!value) {
        alert('All fields must be filled!');
        return;
      }
      fields[name] = value;
    }
  }

  console.log(fields);

  formElement.reset();
});

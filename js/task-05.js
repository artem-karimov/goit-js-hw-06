'use strict';

const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', event => {
  const { value } = event.target;
  if (value) outputElement.innerText = value;
  else outputElement.innerText = 'Anonymous';
});

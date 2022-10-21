'use strict';

const inputElement = document.getElementById('validation-input');

const dataLength = +inputElement.getAttribute('data-length');

inputElement.addEventListener('blur', ({ target }) => {
  const { classList } = inputElement;
  if (target.value.length === dataLength && !classList.contains('valid')) {
    classList.remove('invalid');
    classList.add('valid');
  } else if (target.value.length !== dataLength && !classList.contains('invalid')) {
    classList.remove('valid');
    classList.add('invalid');
  }
});

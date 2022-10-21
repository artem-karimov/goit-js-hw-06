'use strict';

const inputElement = document.getElementById('font-size-control');
const spanElement = document.querySelector('span');

inputElement.addEventListener(
  'input',
  ({ target }) => (spanElement.style.fontSize = `${target.value}px`),
);

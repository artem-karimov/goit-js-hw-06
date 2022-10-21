'use strict';

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const spanElement = document.getElementById('value');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
  counterValue--;
  spanElement.innerText = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  spanElement.innerText = counterValue;
});

'use strict';

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const boxes = document.getElementById('boxes');
const inputElement = document.querySelector('input');
const createButton = document.querySelector('[data-create');
const destroyButton = document.querySelector('[data-destroy]');

const createBoxes = amount => {
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    const divSize = `${30 + i * 10}px`;
    divElement.style.width = divSize;
    divElement.style.height = divSize;
    divElement.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(divElement);
  }
};

const destroyBoxes = () => (boxes.innerHTML = '');

createButton.addEventListener('click', () => {
  const numberOfElements = +inputElement.value;

  if (numberOfElements <= 0) {
    alert('Number must be positive!');
    return;
  }

  createBoxes(numberOfElements);
});

destroyButton.addEventListener('click', () => destroyBoxes());

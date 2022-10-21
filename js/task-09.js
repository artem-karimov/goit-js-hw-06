'use strict';

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const buttonElement = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');

buttonElement.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanElement.innerText = color;
});

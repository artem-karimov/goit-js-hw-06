'use strict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const displayIngredients = () => {
  const items = [];

  for (const ingredient of ingredients) {
    const item = document.createElement('li');
    item.innerHTML = ingredient;
    item.classList.add('item');
    items.push(item);
  }

  const ingredientsList = document.getElementById('ingredients');
  ingredientsList.append(...items);
};

displayIngredients();

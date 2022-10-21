'use strict';

const getResult = () => {
  const result = [];

  const categories = document.getElementById('categories');

  result.push(`Number of categories: ${categories.childElementCount}`);

  for (const { children } of categories.children) {
    const categoryInformation = [];
    categoryInformation.push(`Category: ${children[0].innerText}`);
    categoryInformation.push(`Elements: ${children[1].childElementCount}`);
    result.push(categoryInformation.join('\n'));
  }

  return result.join('\n\n');
};

console.log(getResult());

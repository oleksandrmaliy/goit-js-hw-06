const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListArray = [];

ingredients.forEach(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = ingredient;
  listItemEl.classList.add('item');

  ingredientsListArray.push(listItemEl);
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsListArray);
console.log(ingredientsListEl);

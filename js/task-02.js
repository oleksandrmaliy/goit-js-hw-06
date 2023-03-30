const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListArray = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = ingredient;
  listItemEl.classList.add('item');
  return listItemEl;
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsListArray);
console.log(ingredientsListEl);

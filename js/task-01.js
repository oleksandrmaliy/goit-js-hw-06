const categoriesListItemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesListItemsEl.length);
console.log('');

categoriesListItemsEl.forEach(category => {
  const categoryNameEl = category.querySelector('h2');
  const lastElementsEl = category.lastElementChild.querySelectorAll('li');

  console.log('Category:', categoryNameEl.textContent);
  console.log('Elements:', lastElementsEl.length);
  console.log('');
});

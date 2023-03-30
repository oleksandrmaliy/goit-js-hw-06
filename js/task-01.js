const categoriesQty = document.body.firstElementChild.nextElementSibling.childElementCount;
console.log('Number of categories:', categoriesQty);
console.log('');

const categoriesListItemsEl = document.querySelectorAll('.item');

categoriesListItemsEl.forEach(category => {
  const categoryNameEl = category.firstElementChild.textContent;
  const elementsQtyEl = category.lastElementChild.childElementCount;

  console.log('Category:', categoryNameEl);
  console.log('Elements:', elementsQtyEl);
  console.log('');
});

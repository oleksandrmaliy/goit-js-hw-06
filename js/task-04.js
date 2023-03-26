const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValueNumber = 0;

decrementBtn.addEventListener('click', () => {
  counterValueNumber -= 1;
  counterValue.textContent = counterValueNumber;
});

incrementBtn.addEventListener('click', () => {
  counterValueNumber += 1;
  counterValue.textContent = counterValueNumber;
});

const counterSet = {
  counterValue: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

const { counterValue, decrementBtn, incrementBtn } = counterSet;

let counterValueNumber = 0;

decrementBtn.addEventListener('click', () => {
  counterValueNumber -= 1;
  counterValue.textContent = counterValueNumber;
});

incrementBtn.addEventListener('click', () => {
  counterValueNumber += 1;
  counterValue.textContent = counterValueNumber;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxesEl = document.querySelector('#boxes');
const divControlEl = document.querySelector('#controls');
const inputNumberEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const inputMin = Number(inputNumberEl.min);
const inputMax = Number(inputNumberEl.max);
let size = 30;
let stringsArray = [];

buttonCreateEl.addEventListener('click', onCreateBoxes);
buttonDestroyEl.addEventListener('click', onDestroyBoxes);

arrayCreate();

function onCreateBoxes() {
  const targetBoxesNum = Number(inputNumberEl.value);

  if (inputNumberEl.min > targetBoxesNum || targetBoxesNum > inputNumberEl.max) {
    alert('Entered number must be in range from 1 to 100, please enter correct value. Thanks.');
  } else {
    divBoxesEl.innerHTML = stringsArray.slice(0, targetBoxesNum).join(``);
  }
}

function onDestroyBoxes() {
  divBoxesEl.innerHTML = '';
  inputNumberEl.value = '';
  size = 30;
  stringsArray = [];
  arrayCreate();
}

function arrayCreate() {
  for (let i = inputMin; i <= inputMax; i += 1) {
    const stringBox = `<p></p><div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};">${i}</div>`;

    size += 10;
    stringsArray.push(stringBox);
  }
}

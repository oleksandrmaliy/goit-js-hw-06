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

console.log(inputNumberEl.value);

buttonCreateEl.addEventListener('click', onCreateBoxes);
buttonDestroyEl.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
  const targetBoxesNum = Number(inputNumberEl.value);
  console.log(targetBoxesNum);

  let width = 30;
  let height = 30;
  let stringDivBoxes = '';

  if (1 > targetBoxesNum || targetBoxesNum > 100) {
    alert('Entered number must be in range from 1 to 100, please enter correct value. Thanks.');
  } else {
    for (let i = 1; i <= targetBoxesNum; i += 1) {
      const stringBox = `<p></p><div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};">${i}</div>`;

      width += 10;
      height += 10;
      stringDivBoxes += stringBox;
    }
  }
  console.log(stringDivBoxes);
  divBoxesEl.innerHTML = stringDivBoxes;
}
function onDestroyBoxes() {
  divBoxesEl.innerHTML = '';
  inputNumberEl.value = '';
}

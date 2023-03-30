function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColorNumber = document.querySelector('.color');

buttonEl.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const getColor = getRandomHexColor();
  bodyEl.style.backgroundColor = getColor;
  spanColorNumber.textContent = getColor;
}

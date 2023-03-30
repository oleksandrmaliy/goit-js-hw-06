const inputData = document.querySelector('#font-size-control');
const fontToChange = document.querySelector('#text');

fontToChange.style.fontSize = inputData.value + 'px';

inputData.addEventListener('input', changeFont);

function changeFont(event) {
  fontToChange.style.fontSize = event.currentTarget.value + 'px';
}

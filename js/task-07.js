const inputData = document.querySelector('#font-size-control');
const fontToChange = document.querySelector('#text');

inputData.addEventListener('input', changeFont);

function changeFont(event) {
  fontToChange.style.fontSize = event.currentTarget.value + 'px';
}

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onNameInput);

function onNameInput(event) {
  const nameEntered = event.currentTarget.value;

  outputName.textContent = nameEntered;

  if (nameEntered === '') {
    outputName.textContent = 'Anonymous';
  }
}

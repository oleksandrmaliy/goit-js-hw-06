const inputData = document.querySelector('#validation-input');
const validLength = Number(inputData.dataset.length);

inputData.addEventListener('blur', inputValidation);

function inputValidation(event) {
  const dataEntered = event.currentTarget.value;

  if (dataEntered.length === validLength) {
    inputData.classList.add('valid');
    inputData.classList.remove('invalid');
  } else {
    inputData.classList.add('invalid');
    inputData.classList.remove('valid');
  }
}

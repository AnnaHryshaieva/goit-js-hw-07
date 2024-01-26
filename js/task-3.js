const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', event => {
  nameOutput.textContent = event.target.value.trim();

  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'Anonymous';
  }
});

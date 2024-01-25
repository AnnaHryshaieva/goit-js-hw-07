function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const div = document.querySelector('div#boxes');

btnCreate.addEventListener('click', onClickCreate);
btnDestroy.addEventListener('click', onClickDestroy);

function onClickCreate() {
  let x = Number(input.value);
  if (x >= 1 && x <= 100) {
    div.innerHTML = '';
    div.insertAdjacentHTML('afterbegin', createBoxes(x));
    input.value = '';
  }
}

function onClickDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const markup = [];
  let size = 20;

  for (let i = 1; i <= amount; i += 1) {
    size += 10;

    markup.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
  return markup.join('');
}

function destroyBoxes() {
  div.innerHTML = '';
}

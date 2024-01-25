function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector('span.color');
const btn = document.querySelector('button.change-color');
const body = document.querySelector('body');

btn.addEventListener('click', onClick);

function onClick() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}

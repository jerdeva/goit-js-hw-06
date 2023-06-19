const spanColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
const bodyColor =document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyColor.style.backgroundColor;

}
btnChangeColor.addEventListener('click', changeColor);

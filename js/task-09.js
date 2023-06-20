const spanColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
const bodyColor =document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeColor = () => {
  // console.log(bodyColor.style.backgroundColor = getRandomHexColor());
  console.log(
    (spanColor.textContent = bodyColor.style.backgroundColor =
      getRandomHexColor())
  );

}
btnChangeColor.addEventListener('click', changeColor);

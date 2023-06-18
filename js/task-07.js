const input = document.querySelector('#font-size-control');
const textAbracadabra = document.querySelector('#text');

input.addEventListener('input', hanleInputRange);

function hanleInputRange(event) {
  textAbracadabra.style.fontSize = event.currentTarget.value + 'px';
}

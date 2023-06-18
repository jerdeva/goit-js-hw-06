const textInput = document.querySelector('#validation-input');
const lengthTextInput = textInput.getAttribute('data-length', 6);
// const inputValueLength = textInput.value.length;

const checklength = event => {
  const CurrentValue = event.currentTarget.value;
  if (Number(lengthTextInput) === Number(CurrentValue.length)) {
    textInput.classList.add('valid');
    console.log('Valid');
  } else {
    textInput.classList.add('invalid');
    console.log('Invalid');
  }
};

textInput.addEventListener('blur', checklength);

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
      alert('Пожалуйста заполните все поля');
    } else if (email.value === '' && password.value === '') {
      alert('Пожалуйста заполните все поля');
    } else {
    const user = [
      ['Email', `${email.value}`],
      ['Password', `${password.value}`]];
      
      const obj = Object.fromEntries(user);

      console.log(obj);
      event.currentTarget.reset();
    }
}
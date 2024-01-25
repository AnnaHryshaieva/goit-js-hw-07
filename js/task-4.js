const registerForm = document.querySelector('form.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.target.reset();
}

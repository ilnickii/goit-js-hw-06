const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', loginSubmit);

function loginSubmit (event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert('All fields must be filled in');
      } else {
        const formData = {
            email,
            password
        };
        console.log(formData);
        form.reset();
      }
    
      
}


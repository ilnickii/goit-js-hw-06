const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
    const dataLength = textInput.getAttribute('data-length');
    if (textInput.value.length === Number(dataLength)) {
       textInput.classList.remove('invalid');
       textInput.classList.add('valid');
    } else {
       textInput.classList.remove('valid');
       textInput.classList.add('invalid');
    }
}) 
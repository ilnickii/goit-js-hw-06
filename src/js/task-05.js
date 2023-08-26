const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', ()=> {
    if(inputValue.value.trim() === '') {
        outputValue.textContent = 'Anonymous';
    } else {
        outputValue.textContent = inputValue.value.trim();
    }
});
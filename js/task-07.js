const sizeValue = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

sizeValue.addEventListener('input', () => {
    inputText.style.fontSize = `${sizeValue.value}px`;
})
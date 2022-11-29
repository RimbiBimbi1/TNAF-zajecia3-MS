const incrementButton = document.getElementById("increment");
const colorButton = document.getElementById("changeColor");

const iterator = document.getElementById("number");


incrementButton.addEventListener('click',e => {
    iterator.innerText++;
})

colorButton.addEventListener('click', e => {
    iterator.classList.toggle('red');
})

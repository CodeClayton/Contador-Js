let number = document.querySelector('.number');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const resetButton = document.querySelector('.resetCounter');


plusButton.addEventListener('click', () => {
      let counter = number.textContent;
      counter++;
      number.textContent = counter;
});

minusButton.addEventListener('click', () => {
      let counter = number.textContent;
      counter--;
      number.textContent = counter;
});

resetButton.addEventListener('click', () => {
  number.textContent = 0;
})

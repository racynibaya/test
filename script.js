'use strict';

console.log(document.querySelector('h1').textContent);

const h3 = document.querySelector('h3');

h3.addEventListener('click', () => {
  console.log(h3.classList.toggle('blue'));
});

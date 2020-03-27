console.log('Siema');
const name = 'Michał Frelik';
const age = 26;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age}  lat`);

const day__subtitle = document.querySelectorAll('.day__subtitle');

console.log(day__subtitle);
console.log(day__subtitle[10]);

const day__title__js= document.querySelector('.day__title--js');

console.log(day__title__js);

console.log(day__title__js.innerHTML);

day__title__js.innerHTML = 'DOM = Document Object Model - wpisane JS-em'
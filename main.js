console.log('Siema');
const name = 'Michał Frelik';
const age = 26;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age}  lat`);

const homepage__header = document.querySelector('.homepage__header');

console.log(homepage__header);

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[1].innerHTML);


const h1 = document.querySelector('h1');

console.log(h1.innerHTML);

h1.innerHTML = `<strong>Nazywam</strong> się ${name} i mam ${age}  lat`;


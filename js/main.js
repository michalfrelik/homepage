console.log('Siema');
const name = 'Michał Frelik';
const age = 26;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age}  lat`);

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat!`)
};

welcome(name, age);
welcome('Michał Ferlik', 26);
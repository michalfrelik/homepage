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

const button = document.querySelector('.header__button--js');
console.log(button);


button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js')
    header.innerHTML = '!! Pierwszy button !!';
    alert ('UWAGA');
});
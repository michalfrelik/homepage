console.log('Siema');
const name = 'Michał Frelik';
const age = 80;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age}  lat`);

const day__subtitle = document.querySelectorAll('.day__subtitle');

console.log(day__subtitle);
console.log(day__subtitle[10]);

const day__title__js= document.querySelector('.day__title--js');

console.log(day__title__js);

console.log(day__title__js.innerHTML);

day__title__js.innerHTML = 'DOM = Document Object Model - wpisane JS-em';

if ('javascript' != 'java') {
    console.log('to prawda!');
};

if (age < 20) {
    console.log ('Masz mniej niż 20 lat');
}else if ((age >= 20) && (age <=30)) {
    console.log ('Masz więcej niż 20 lat ale mniej niż 30 lat');
}else {
    console.log ('jesteś 31+')
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
    break;
    case 30:
        console.log('masz równo 30 lat');
    break;
    default:
        console.log(`masz ${age} lat`);
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log (amIOld);

function calculate(x) {
    x = x + 3;
    console.log(`tradycujnie ${x}`);
    return x*7;
}

console.log(calculate(2));

const calculateFat = x => (x+3)*7; 

console.log(calculateFat(2));


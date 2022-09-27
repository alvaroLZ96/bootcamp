// # iteración1

let myFavoriteHero = "Hulk";
let x = 50;
let h= 5; let y = 10;
let z = 'z' + 'y';

// # iteración2 
let character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character.age);

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
console.log (`Soy ${firstName} ${lastName} , tengo ${age} años y me gustan los lobos`)

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(`La suma del precio de ambos juguetes es ${toy1.price + toy2.price}`);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log (car1.finalPrice);
console.log (car2.finalPrice);

//iteración 3
let sum = 10 * 5;
console.log(sum);

let div = 10 / 2;
console.log(div);

let resto = 15 % 9;
console.log(resto);

let p = 10 ; let j = 5;
let o = p + j;
console.log(o);

let c = 10 ; let m = 5;
let i = c * m;
console.log(i);
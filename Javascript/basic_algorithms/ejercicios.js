// # iteración1

let myFavoriteHero = "Hulk";
let x = 50;
let h= 5; let y = 10;
let z = h + y;

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

//iteración3
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

//iteración4
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])

let avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1[0] = "IRONMAN";
console.log(avengers1);

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers2.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty" , "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length-1]);

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters3.splice(1,1);

console.log(rickAndMortyCharacters3)



//iteración5

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 == 2) {
    console.log("number2 dividido entre number1 es igual a 2");
  }
  
  if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
  }
  
  if (number3 != number1) {
    console.log("number3 es distinto number1");
  }
  
  if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
  }
  
  if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }
  
  if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }

  //iteración6


  for (let index = 0; index < 10; index++) {
console.log(index)}



for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    console.log(index)
  }
}

for (let index = 0; index < 10; index++) 
  if (index < 9) {
  console.log ('Intentando dormir 🐑');
}
else {
console.log ('Dormido!')
}

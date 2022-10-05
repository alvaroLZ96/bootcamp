// iteración1
/* Completa la función que tomando dos números como argumento 
devuelva el más alto. */
function sum(numberOne , numberTwo) {
   return numberOne > numberTwo ? numberOne : numberTwo
  }
console.log(sum(1,2))

// iteración2
/* Completa la función que tomando un array de strings como argumento 
devuelva el más largo, en caso de que dos strings tenga la misma 
longitud deberá devolver el primero. */
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const findLongestWord = (avengers) => {
    let longestWord = "";
    for (const vengador of avengers) {
        if (vengador.length > longestWord.length){
            longestWord = vengador;
    }
}
return longestWord;
}
const result = findLongestWord (avengers);
console.log(result);

//iteración3
/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de 
todos los números de la matriz. */
const numbers = [1, 2, 3, 5, 45, 37, 58];
const sumNumbers= (numbers) => {
    let total = 0;
        for (let number of numbers){ 
        total += number;
       }
    return total;
    }
console.log(sumNumbers(numbers)); 

 //iteración 4
 /* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */
const numbers2 = [12, 21, 38, 5, 45, 37, 6]; 
const average = (numbers2) =>  {
    let total = 0;
    for(let eachNumber of numbers2){
        total+= eachNumber;
    
}
return total / numbers2.length;
}
console.log (average(numbers2));


 //iteración 5
/*   Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
 y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:  */
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const averageWord = (param) => {
    let finalSum = 0
    for(let element of mixedElements){
        if (typeof element == "string"){
       finalSum += element.length;
        } else if (typeof element  == "number"){
           finalSum += element;
        }
    }
return finalSum;
}
console.log(averageWord(mixedElements));

// iteración 6
/* Crea una función que reciba por parámetro un array 
y compruebe si existen elementos duplicados, en caso que existan
 los elimina para retornar un array sin los elementos duplicados. 
 Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
const removeDuplicates =(comida) => {
let arrayNoRepeat =[];
    for (let comida of duplicates) {
    if (arrayNoRepeat.includes(comida)== false) {
        arrayNoRepeat.push(comida)
}}
   return arrayNoRepeat;
}

console.log(removeDuplicates(duplicates))

//iteración 7
/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 
- comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
 */
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

const finderName = (array, param2) => {

    for (let name of array){
    if (array.includes(`${param2}`)) {
console.log(array.indexOf(param2))
return true
    } else {
return false;
 }
}
 }
console.log (finderName(nameFinder, "Marc"))

//Iteration #8: Contador de repeticiones
/* Crea una función que nos devuelva el número de veces
que se repite cada una de las palabras que lo conforma.
Puedes usar este array para probar tu función: */
   const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  const repeatCounter = (array) => {
    let contadorTotal = new Object();   //declaro una nueva variable que será un objeto donde 
    for (let element of array) {        //las claves son las palabras y los valores las veces que aparece
        if (contadorTotal[element] == null) {    //si el valor no existe, 
        contadorTotal[element] = 1               //lo inicializamos en 1
        }
        else {                                   //Si ya tiene un valor le vamos sumando 1 a cada vuelta
            contadorTotal[element] = contadorTotal[element] + 1;
        }
    }
     console.log(contadorTotal);
  }

  repeatCounter(counterWords);

/* 
  let totalCount = [];
const repeatCounter = (elements) =>{
  elements.forEach((element) => {
      totalCount[element] = totalCount[element] + 1 || 1;
  })
  return totalCount;
}
console.log(repeatCounter(counterWords)); */
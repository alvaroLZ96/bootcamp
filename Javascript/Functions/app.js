/* // iteración1
function sum(numberOne , numberTwo) {
   return numberOne > numberTwo ? numberOne : numberTwo
  
}
console.log(sum(1,2))

// iteración2
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

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll() {
for (number of numbers){
    let total = numb
}
    
}
***************************************
//iteración 4


//iteración 5


// iteración 6  */

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
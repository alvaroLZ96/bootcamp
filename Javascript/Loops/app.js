// iteración 1
/* Haz un bucle y muestra por consola todos aquellos valores del array
 que incluyan la palabra "Camiseta". Usa la función .includes */
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let tShirt of products) {
  if (tShirt.includes("Camiseta")) {
    console.log(tShirt);
  }
}
// iteración 2
/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres 
aprobados y añade la propiedad isApproved a true o false en consecuencia. 
Una vez lo tengas compruébalo con un console.log. */

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
for (const alumn of alumns) {
  alumn.isApproved = true;
  if (alumn.T1 == false && alumn.T2 == false) {
    alumn.isApproved = false;
  } else if (alumn.T2 == false && alumn.T3 == true) {
    alumn.isApproved = false;
  } else if (alumn.T1 == false && alumn.T3 == true) {
    alumn.isApproved = false;
  }
}
console.log(alumns);

//iteración 3
/* Usa un bucle forof para recorrer todos los destinos del array.
 Imprime en un console.log sus valores. */
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];
for (let country of placesToTravel) {
  console.log(country);
}

//iteración 4
/* Usa un for...in para imprimir por consola los datos del alienígena
Puedes usar este objeto: */
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (let data in alien) {
  console.log(`alien tiene una clave ${data} y un valor de ${alien[data]} `);
}

//Iteración #5: Probando For**
/* Usa un bucle **for** para recorrer todos los destinos del array
 y elimina los elementos que tengan el id 11 y 40. Imprime en un 
 ***console log*** el array. Puedes usar este array: */
const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let country of placesToTravel2) {
  if (country.id == 11 || country.id == 40) {
    placesToTravel2.splice(placesToTravel2.indexOf(country), 1);
  }
}
console.log(placesToTravel2);

// iteración 6
/* Usa un bucle for...of para recorrer todos los juguetes 
y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función 
.includes() para comprobarlo.Puedes usar este array: */
const toys2 = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (let toy of toys2) {
  if (toy.name.includes("gato")) {
    delete toy;
  } else {
    console.log(toy);
  }
}

//Iteración #7: For...of avanzado
/* Usa un bucle for...of para recorrer todos los juguetes
y añade los que tengan más de 15 ventas (sellCount) al array
popularToys. Imprimelo por consola.. Puedes usar este array: */

const popularToys = [];
const toys = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (let toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}
console.log(popularToys);

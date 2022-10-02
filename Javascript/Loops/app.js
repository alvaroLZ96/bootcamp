// iteración 1
/* Haz un bucle y muestra por consola todos aquellos valores del array
 que incluyan la palabra "Camiseta". Usa la función .includes */
const products = [
'Camiseta de Pokemon', 
'Pantalón coquinero', 
'Gorra de gansta', 
'Camiseta de Basket', 
'Cinrurón de Orión',
 'AC/DC Camiseta']

const includesThat= (products)=>{
 for(let tShirt of products) {
   if (tShirt.includes("Camiseta")){
    console.log(tShirt) 
}
 }
} 
console.log(includesThat(products))
// iteración 2
/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres 
aprobados y añade la propiedad isApproved a true o false en consecuencia. 
Una vez lo tengas compruébalo con un console.log. */
/* 
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
 
subjects.foreach((subjects, i) =>{
	if 

}
++++++++++++++++++ */

//iteración 3
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (let country of placesToTravel){
console.log(country)
}

//iteración 4
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
let aliens = JSON.stringify(alien);

for(let data in aliens){
	console.log(aliens);
}

//preguntar por que sale por consola 70 veces!!!!!

 // iteración 6
/* Usa un bucle for...of para recorrer todos los juguetes 
y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función 
.includes() para comprobarlo.Puedes usar este array: */
const toys2 = [
	{id: 5, name: 'Buzz MyYear'}, 
	{id: 11, name: 'Action Woman'}, 
	{id: 23, name: 'Barbie Man'}, 
	{id: 40, name: 'El gato con Guantes'},
	{id: 40, name: 'El gato felix'}
	]

	 for (let toy of toys2) {
		if (toy.name.includes("gato")) {
			delete toy;
		} else {
			console.log(toy);
		}





 
//Iteración #7: For...of avanzado
const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for(let toy of toys){
	if (toy.sellCount > 15 ){
		popularToys.push(toy);
	}
}
console.log(popularToys);


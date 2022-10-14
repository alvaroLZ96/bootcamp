//iteración 1**Mix for e includes**
/* Dado el siguiente javascript usa forof para recorrer el array 
de películas, genera un nuevo array con las categorías de las 
películas e imprime por consola el array de categorías. Ten en cuenta 
que las categorías no deberían repetirse. Para filtrar las categorías
puedes ayudarte de la función **.includes()** */
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
/* movies.flat(1);
let newArray = []
for (let movie of movies){
if (movies.movie.categories.includes()== false){
    newArray.push(movie);
}
} */
/* movies.flatMap(movie => movie.categories);  */
const categories =(movies)=>{
let newArray =[];
for (let movie of movies){
    for(let category of movie.categories){
    if (newArray.includes(category)== false){
        newArray.push(category)
    } }
    }
return newArray;
}
console.log(categories(movies))
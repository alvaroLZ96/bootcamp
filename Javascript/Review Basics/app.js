//iteración 1
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
movies.flatMap(movie => movie.categories);
const categories =(movies)=>{
let newArray =[];
for (let movie of movies){
    if (newArray.includes(movie)== false){
        newArray.push(movie)
    } }
    return newArray;
}
console.log(categories(movies))
    
//iteración 2

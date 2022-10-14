/* arrays no 
c; /* reamos el repositorio
        clonamos el repositorio y hacemos las carpetas necesarias
git add .
git commit -m "el comentario" 
git push 
 
alt + shift + a;

switch(superhero) */


let pokemonExt = 'Charmander';

function showPokemon() {
  let pokemonExt = "Squirtle"; // declara variable local

  let message = 'Hello, ' + pokemonExt; // Squirtle
  console.log(message);
}

// la función crea y utiliza su propia variable local pokemonExt
showPokemon();

console.log( pokemonExt )
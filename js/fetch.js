fetch('https://pokeapi.co/api/v2/pokemon/').then (function(response) {
    return response.JSON();
}).then(function(pokemonList){
    console.log(pokemonList);
}).catch(function (){
    console.log('No pokemon available')
});
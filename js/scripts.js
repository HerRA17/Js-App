
//local scope array and functions
const pokemonRepository = (function (){
    //objects
    const pokemonOne = {
    name:'Charizard',
    height: 1.7,
    type: ['fire', 'flying']
};
const pokemonTwo = {
    name:'Pikachu',
    height:0.4,
    type: 'electric'
}; 
const pokemonThree ={
    name:'Mewtwo',
    height: 2.0,
    type: 'psychic'
};
const pokemonFour = {
    name: 'Articuno',
    height:1.7,
    type:['flying', 'ice']
};
    const pokemonList = [];
//addition of pokemon
    function add(pokemon) {
        if (typeof pokemon === 'object' &&
        'name' in pokemon &&
        'height' in pokemon &&
        'types' in pokemon) {
            pokemonList.push(pokemon); } else {
                console.log('pokemon is not correct');
                // document.alert('pokemon is not correct');
               }
        }
    //get all pokemons
    function getAll() {
            return pokemonList;
        }
    return{ 
            add: add,
            getAll: getAll,
           }

}) (); //IIFE
// simplyfying loop-forEach
pokemonRepository.getAll().forEach(clasification(pokemon)) {
    let str = `<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`;
if (pokemon.type[0] === 'fire' && pokemon.type[1] === 'flying') {
    document.write(str);
    // document.write(`<p id="fire-flying-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
    console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`); 
}  else if (pokemon.type === 'electric' ) {
    // document.write(str);
    // document.write(`<p id="electric-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
    console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
} else if (pokemon.type === 'psychic' ) {
    // document.write(str);
    // document.write(`<p id="psychic-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
    console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
} else if (pokemon.type[0] === 'ice' && pokemon.type[1] === 'flying' ) {
    // document.write(str);
    // document.write(`<p id="ice-flying-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
    console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
}
}
// console.log(pokemonList.forEach(clasification));
pokemonList.forEach(clasification);

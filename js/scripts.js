let pokemonList = [];

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

pokemonList.push(pokemonOne);
pokemonList.push(pokemonTwo);
pokemonList.push(pokemonThree);
pokemonList.push(pokemonFour);

// simplyfying loop-forEach
function clasification(pokemon) {
        // let str = `<p>${pokemon.name}, is (${pokemon.height})m, and an ${pokemon.type}.</p>`;
    if (pokemon.type[0] === 'fire' && pokemon.type[1] === 'flying') {
        document.write(`<p id="fire-flying-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
        // console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`); 
    }  else if (pokemon.type === 'electric' ) {
        document.write(`<p id="electric-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
        // console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
        // document.write(str); 
    } else if (pokemon.type === 'psychic' ) {
        document.write(`<p id="psychic-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
        // console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
        // document.write(str); //I am not sure if that should as well be part of it?
    } else if (pokemon.type[0] === 'ice' && pokemon.type[1] === 'flying' ) {
        document.write(`<p id="ice-flying-pokemon">${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
        // console.log(`<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type}.</p>`);
        // document.write(str); 
    }
    
}
// console.log(pokemonList.forEach(clasification));
pokemonList.forEach(clasification);

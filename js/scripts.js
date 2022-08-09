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

for (const {name, height} of pokemonList) {
    if (height > 1.0 ) {
        document.write(`<p class="large-pokemon">${name}, is (${height})m, and an ${pokemon.type}. This is a big Pokémon!</p>`);
    } else {
        document.write(`<p class="small-pokemon">${name}, is (${height})m, and an ${pokemon.type}. Might not be big but could surprise you.</p>`);
    }
}

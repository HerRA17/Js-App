let pokemonList = [];

const pokemonOne = {
    name:'Charizard',
    height: '1.7m',
    type: 'fire, flying'
};
const pokemonTwo = {
    name:'Pikachu',
    height:'.4m',
    type: 'electric'
}; 
const pokemonThree ={
    name:'Mewtwo',
    height: '2m',
    type: 'psychic'
};
const pokemonFour = {
    name: 'Articuno',
    height:'1.7m',
    type:'flying, ice'
}; //objects

let pokemonRepository = (function (){
    pokemonList = [];
      if (typeof Object === 'function') {
        function add(pokemon) {
            pokemonList.push(pokemon);
                } 
        function getAll() {
           return pokemonList.getAll()
                }
        function remove() {
            pokemonList.pop(pokemon)
                }           
        }
        return{ 
            add: add,
            getAll: getAll,
            remove: remove
          };
        
}) (); //IIFE

// simplyfying loop-forEach
function clasification(pokemons) {
    
    let str = `<p>${pokemons.name}, is (${pokemons.height})m, and an ${pokemons.type}.</p>`;
     if (type === 'fire, flying') {
         document.getElementsById('fire, flying-pokemon').innerHTML = str; 
     }  else if (type === 'electric-pokemon' ) {
         document.getElementsById('electric-pokemon').innerHTML = str; 
     } else if (type === 'psychic' ) {
         document.getElementsById('psychic-pokemon').innerHTML = str; //I am not sure if that should as well be part of it?
     } else if (type === 'flying, ice' ) {
         document.getElementsById('flying, ice-pokemon').innerHTML = str; 
     }
    console.log(str);
}
pokemonList.forEach(clasification);

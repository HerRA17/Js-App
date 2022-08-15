const pokemonRepository = (function (){
//objects
    const pokemonList = [
    {
        name:'Charizard',
        height: 1.7,
        type: ['fire' , 'flying']
    },
    {
        name:'Pikachu',
        height: 0.4,
        type: 'electric'
    }, 
    {
        name:'Mewtwo',
        height: 2.0,
        type: 'psychic'
    }
    ];

    function add(pokemon) {
        if (typeof pokemon === 'object' && 
        'name' in pokemon &&
        'height' in pokemon &&
        'type' in pokemon) {
            pokemonList.push(pokemon); 
        } else {
                console.log('pokemon is not correct');
                // document.alert('pokemon is not correct');
               }
            }
    function getAll() {
            return pokemonList;
        }
    //add List function
        function addListItem(pokemon) {
        //selector of ul in HTMl
        let pokemonList = document.querySelector('.pokemon-list');
        //variable-pokemon defined
        let listPokemon = document.createElement('li');
        //button creation
        let button = document.createElement('button').innerText = pokemon.name;
        button.classList.add('button-pokemon');
        //append li-button
        listPokemon.appendChild(button);
        //append li    
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', function(pokemon){
            console.log(pokemon)
        });
        }
        return{ 
            add: add,
            getAll: getAll,
            addListItem: addListItem 
        }
        
}) (); //IIFE

pokemonRepository.add({name: 'Articuno',     height:1.7,    type:[ 'ice', 'flying']}); 
// simplyfying loop-forEach pokemon
 function clasification(pokemon) {
    let str = `<p>${pokemon.name}, is ${pokemon.height}m, and an ${pokemon.type} pokemon.</p>`;
if (pokemon.type[0] === 'fire' && pokemon.type[1] === 'flying') {
    document.write(str);
}  else if (pokemon.type === 'electric' ) {
    document.write(str);
} else if (pokemon.type === 'psychic' ) {
    document.write(str);
} else if (pokemon.type[0] === 'ice' && pokemon.type[1] === 'flying' ) {
    document.write(str);
    }
}

//clasification of pekomen types with loop
pokemonRepository.getAll().forEach(clasification (pokemon)) {
pokemonRepository.addListItem(pokemon);    
};

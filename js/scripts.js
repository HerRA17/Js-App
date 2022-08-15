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
    //shows details of pokemon
    function showDetails(pokemon){
            console.log(pokemon);
        }
    //add List function
        function addListItem(pokemon) {
        //selector of ul in HTMl
        let pokemonList = document.querySelector('.pokemon-list');
        //variable-pokemon defined
        let listPokemon = document.createElement('li');
        //button creation
        let button = document.createElement('button');
        button.innerText = pokemon.name
        button.classList.add('button-pokemon');
        //append li-button
        listPokemon.appendChild(button);
        //append li    
        pokemonList.appendChild(listPokemon);
        //add click function
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        });
        }
        return{ 
            add: add,
            getAll: getAll,
            addListItem: addListItem 
        }
        
}) (); //IIFE

pokemonRepository.add({name: 'Articuno',     height:1.7,    type:[ 'ice', 'flying']}); 
//calls the add List item function  
function classification(pokemon) {
   pokemonRepository.addListItem(pokemon);
}
pokemonRepository.getAll().forEach(classification); 



//IIFE-sort of a repository
const pokemonRepository = (function (){
    const pokemonList = [];
    //api-url of pokemons
    let apiUrl ='https://pokeapi.co/api/v2/pokemon/?limit=150';
    //function add pokemon
    function add(pokemon) {
        if (typeof pokemon === 'object' && 
        'name' in pokemon &&
        'detailsUrl' in pokemon 
            ) {
            pokemonList.push(pokemon); 
        } else {
                console.log('pokemon is not correct');
                document.alert('pokemon is not correct');
               }
        }
    //get all function
    function getAll() {
            return pokemonList;
        }
    //add pokemon to list-creating elements in HTML
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
        button.addEventListener('click', function(event){
            showDetails(pokemon);
            });
        }
    //load list function
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
            }).then(function (json){
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                    console.log(pokemon);
                });
            }).catch(function (e) {
                console.error(e);
            }) 
        };
    //load details function
    function loadDetails(item) { 
        let url = item.detailsUrl;
        return fetch(url).then(function (response){
        return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e){
        console.error(e);
        });
    }
     //shows details of pokemon
    function showDetails(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function(){
            console.log(pokemon);
        });
    }
        return{ 
            add: add,
            getAll: getAll,
            addListItem:addListItem,
            loadList:loadList,
            loadDetails:loadDetails,
            showDetails:showDetails
        };

}) ();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});




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
        let pokemonList = document.querySelector('.list-group');
        //variable-pokemon defined
        let listPokemon = document.createElement('li');
        listPokemon.classList.add('group-list-item');
        listPokemon.classList.add('col-sm-4','col-md-6','col-lg-12')
        //button creation
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        button.setAttribute('data-toggle','modal');
        button.setAttribute('data-target','#pokemon-modal');
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
        }); 
        }
    //load details function
    function loadDetails(pokemon) { 
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response){
        return response.json();
        }).then(function (details) {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.weight = details.weight;
            pokemon.types = details.types;
            pokemon.abilities = details.abilities;
        }).catch(function (e){
        console.error(e);
        });
    }
     //shows details of pokemon
    function showDetails(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function
            (){
                showModal(pokemon);
                // console.log(pokemon);
            });
    }
    
    //Function modal
    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
                
        modalTitle.empty();
        modalBody.empty();
    //creating element for name
        let nameElement = $('<h1>'+ pokemon.name+'</h1>');
    //creating new img
        let imageElementFront = $('<img alt="" src="${item.imageUrl}" class="modal-img" style="width:50%">');
        imageElementFront.attr('src', pokemon.imageUrlFront);
        let imageElementBack = $('<img classs="modal-img" style="width:50%">');
        imageElementBack.attr('src', pokemon.imageUrlBack);
    //creating elemnt for height
        let heightElement = $('<p>'+ 'height: '+ pokemon.height +'</p>');
    //creating element for weight
        let weightElement = $('<p>'+ 'weight: '+ pokemon.weight +'</p>');
    //creating element for types
        let typesElement = $('<p>'+ 'types: '+ pokemon.types +'</p>');
    //creating element for abilities
        let abilitiesElement = $('<p>'+ 'abilities: '+ pokemon.abilities +'</p>');
        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);
    } 
    
    
        return{ 
            add: add,
            getAll: getAll,
            addListItem:addListItem,
            loadList:loadList,
            loadDetails:loadDetails,
            // showModal:showModal
        };

})();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});



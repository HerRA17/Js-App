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

        pokemonRepository.loadDetails(pokemon).then(function
            (){
        //
        let modalContainer = document.createElement('div');
        modalContainer.setAttribute('id', 'modal-container');
        modalContainer = document.querySelector('#modal-container');
        //
        let dialogPromiseReject;
        //Show Modal function
        function showModal(title, text) {
            modalContainer.innerHTML = '';
            //create modal element & giving it a class
            let modal = document.createElement('div');
            modal.classList.add('modal');
            //add new modal
            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventLister('click' , hideModal);
            //add title
            let titleElement = document.createElement('h1');
            titleElement.innerText = title;
            //add content
            let contentElement = document.createElement('p');
            contentElement.innerText = text;
            //appending Child elements of modal and modal Container
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal);
            modalContainer.classList.add('is-visible');
        }
        //Hide Modal function
        function hideModal() {
            modalContainer.classList.remove('is-visible');
            //condition statement for the removal of class
            if(dialogPromiseReject) {
                dialogPromiseReject();
                dialogPromiseReject = null;
            }
        }
        function showDialog(title,text) {
            showModal(title,text);
            //select modal-class
            let modal = modalContainer.querySelector('.modal');
            //create confirm button, class addition and setting inner Text
            let confirmButton = document.createElement('button');
            confirmButton.classList.add('modal-confirm');
            confirmButton.innerText = 'Confirm';
            //create  cancel button, class addition and setting inner Text
            let cancelButton = document.createEleemnte('button');
            cancelButton.classList.add('modal-cancel')
            cancelButton.innerText = 'Cancel';
            //append childs to modal
            modal.appendChild(confirmButton);
            modal.appendChild(cancelButton);
            //set Focus to confirm to easily select button with keyboard
            confirmButton.focus();
            //Promise
            return new Promise((resolve, reject) => {
                cancelButton.addEventListener('click', hideModal);
                confirmButton.addEventListener('click', () =>{
                    dialogPromiseReject = null;
                    hideModal();
                    resolve();
                });
                dialogPromiseReject = reject;
            });
        }
        //
        document.querySelector('#show-modal').addEventListener('click', () => {
            showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
                alert('confirmed!');
            }, () => {
                alert('not confirmed!')
            });
        });
        //
        window.addEventListener('keydown', (e) => {
            let modalContainer = document.querySelector('#modal-container');
            if(e.key === 'Escape' &&
            modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        });
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

// function showLoadingMessage() {
// document.getElementById('loading-message').style.display = 'block';
// }
// function hideLoadingMessage(){
//     document.getElementById('loading-message').style.display = 'none';
// }




//IIFE-sort of a repository
const pokemonRepository = (function () {
    const pokemonList = [];
    //api-url of pokemons
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
    //function add pokemon
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        document.alert("pokemon is not correct");
      }
    }
    console.log(add);
    //get all function
    function getAll() {
      return pokemonList;
    }
    console.log(getAll);
    //add pokemon to list-creating elements in HTML
    function addListItem(pokemon) {
      //selector of ul in HTMl
      let pokemonList = document.querySelector(".list-group");
      //variable-pokemon defined
      let listPokemon = document.createElement("li");
      listPokemon.classList.add("group-list-item");
      listPokemon.classList.add("col-sm-4", "col-md-6", "col-lg-12");
      //button creation
      let button = document.createElement("button");
      button.innerText = capitalizeFirstLetter(pokemon.name);
      button.classList.add("pokemon-button", );
      //linking buttons to modal
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#pokemon-modal");
      // addShowModal(pokemon);
      button.addEventListener("click", function () {
        showDetails(pokemon);
      });
      //append li-button
      listPokemon.appendChild(button);
      //append li
      pokemonList.appendChild(listPokemon);
    }
    console.log(addListItem);
    //load list function
    function loadList() {
      return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: capitalizeFirstLetter(item.name),
              detailsUrl: item.url,
            };
            add(pokemon);
            // console.log(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    }
    console.log(loadList);
    //load details function
    function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
          pokemon.weight = details.weight;
          pokemon.types = details.types;
        })
        .catch(function (e) {
          console.error(e);
        });
    }
    console.log(loadDetails);
    //shows details of pokemon
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        showModal(pokemon);
        // console.log(pokemon);
      });
    }
    console.log(showDetails);
    //Function modal
    let modalContainer = document.querySelector("#pokemon-modal");
    function showModal(pokemon) {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
  
      modalTitle.empty();
      modalBody.empty();
      //creating element for name
      let nameElement = $("<h1>" + capitalizeFirstLetter(pokemon.name) + "</h1>");
      //creating new img
      let imageElementFront = $(
        `<img alt="pokemon-image" src="${pokemon.imageUrl}" class="modal-img" style="width:40%">`
      );
      //creating elemnt for height
      let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");
      //creating element for weight
      let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");
      //creating element for types
      let pokemonTypes = [];
      Object.keys(pokemon.types).forEach(key => {
				pokemonTypes.push(' ' + pokemon.types[key].type.name);
			});
      let typesElement = $("<p>" + "Type(s): " + pokemonTypes + "</p>");
      
      
      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
      modalContainer.classList.add("is-visible");
      $('#pokemonModal').modal('show');
      }
      console.log(showModal);
    //Function hide modal 
    function hideModal() {
      modalContainer.classList.remove("is-visible");
    }
    console.log(hideModal);
    //Function to hide modal when Escapekey is pressed
      window.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
          hideModal();
          }
        });
        console.log(window);
    //Function to hide modal when clicking outside of modal
        modalContainer.addEventListener("click", (e) => {
          let target = e.target;
          if (target === modalContainer){
           hideModal(); 
          }
        });
        console.log(modalContainer);
    //Function that converts first letter to uppercase
    function capitalizeFirstLetter(str) {
     const capitalized = str.replace(/^./, str[0].toUpperCase());
      return capitalized;
      }
      // console.log();
    //Returning IIFE functions
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showModal:showModal,
      hideModal:hideModal
    };
  })();
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  })


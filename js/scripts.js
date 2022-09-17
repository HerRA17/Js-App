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
        // console.log("pokemon is not correct");
        document.alert("pokemon is not correct");
      }
    }
    //get all function
    function getAll() {
      return pokemonList;
    }
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
      button.classList.add("pokemon-button");
      //linking buttons to modal
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#pokemon-modal");
      // addShowModal(pokemon);
      button.addEventListener("click", function (event) {
        showDetails(pokemon);
      });
      //append li-button
      listPokemon.appendChild(button);
      //append li
      pokemonList.appendChild(listPokemon);
    }
  
    //load list function
    function loadList() {
      return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
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
    //load details function
    function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      return fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (details) {
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
          pokemon.weight = details.weight;
          pokemon.types = details.types;
        })
        .catch(function (e) {
          console.error(e);
        });
    }
    //shows details of pokemon
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        showModal(pokemon);
        // console.log(pokemon);
      });
    }
  
    //Function modal
    function showModal(pokemon) {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
  
      modalTitle.empty();
      modalBody.empty();
      //creating element for name
      let nameElement = $("<h1>" + capitalizeFirstLetter(pokemon.name) + "</h1>");
      //creating new img
      let imageElementFront = $(
        `<img alt="pokemon-image" src="${pokemon.imageUrl}" class="modal-img" style="width:50%">`
      );
      //creating elemnt for height
      let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");
      //creating element for weight
      let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");
      //creating element for types
      // let pokemonTypes = [];
      // Object.key(pokemon.types).forEach(key => {
      //   pokemonTypes.push("" + pokemon.types[key].type.name);
      // })
      // let typesElement = $("<p>" + "Type(s): " + pokemonTypes + "</p>");
      let typesElement = $("<p>" + "Type(s): " + pokemon.types + "</p>");
      // typesElement.classList.add("element-types");
      
      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
      }
    // program to convert first letter of a string to uppercase
    function capitalizeFirstLetter(str) {
      // converting first letter to uppercase
      const capitalized = str.replace(/^./, str[0].toUpperCase());
      return capitalized;
      }
    //Returning IIFE functions
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
    };
  })();
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  })



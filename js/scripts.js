    
const pokemonRepository = (function (){
     const pokemonList = [];
 const pokemonOne = {
     name:'Charizard',
     height: 1.7,
     type: ['fire', 'flying']
 };
 const pokemonTwo = {
     name:'Pikachu',
     height: 0.4,
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
     type:['flying' , 'ice']
 }; //object
     function add(pokemon) {
         if (typeof pokemon === 'object' && 'name' in pokemon) {
             pokemonList.push(pokemon); } else {
                 console.log('pokemon is not correct')
                 }
             }
     function getAll() {
             return pokemonList.getAll()
             }
        
     function remove() {
             pokemonList.pop(pokemon);
             }           
         return{ 
             add: add,
             getAll: getAll,
             remove: remove
           }


 }) (); //IIFE

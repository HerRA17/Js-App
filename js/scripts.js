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
};

pokemonList.push(pokemonOne);
pokemonList.push(pokemonTwo);
pokemonList.push(pokemonThree);
pokemonList.push(pokemonFour);

/*
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].type  === 'fire, flying' ) {
        document.write(pokemonList[i].name + ' is an incredible ' + (pokemonList[i].height) +' beast!');
    } else if (pokemonList[i].type  === 'psychic' || pokemonList[i].height === '2m') {
        document.write(pokemonList[i].name + ' is so to speak a clone of mew and is ' + (pokemonList[i].height) + ' tall and extremly rare!');
    } else if (pokemonList[i].type  === 'flying, ice') {
        document.write(pokemonList[i].name + ' is a legendary ' + pokemonList[i].type + ' rare to encounter!');
    };
    document.write(pokemonList);
};
I would like to know if I could write it like that including ('div class="pokemonList"') insted of pokemonList and make it appear inside.
For now I have not been succesful.
*/

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > '1.0' ) {
        document.write(pokemonList[i].name + ' (' + pokemonList[i].height + ')' + '-it is a big pokemon!');
    } else {
        document.write(pokemonList[i].name +' (' + pokemonList[i].height + ')' + '-not big but could surprise you.');
    }
}; //for loop rivision of height-value.

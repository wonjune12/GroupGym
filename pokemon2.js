"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/390/")
.then(function (response){

    let pokeData = response.data;
    var arrAbs = [];    
    for (let i = 0; i < pokeData.abilities.length; i++){
        arrAbs.push( pokeData.abilities[i].ability.name)
    }

    let pokemon2 = new Pokemon(
    pokeData.name,
    pokeData["stats"][4].base_stat,
    pokeData["stats"][5].base_stat,
    arrAbs
    )
    let pokemon22 = document.getElementById("pokemon2");
    pokemon22.innerText = ` ${t1Name}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon2.name)}
                            Attack : ${pokemon2.attackPower}
                            HP  : ${pokemon2.healthPoint}
                            Abilities : ${pokemon2.abilities}`;
})
.catch(function(error){
    console.log(error);
})
"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/348/")
.then(function (response){

    let pokeData = response.data;
    var arrAbs = [];    
    for (let i = 0; i < pokeData.abilities.length; i++){
        arrAbs.push( pokeData.abilities[i].ability.name)
    }

    let pokemon5 = new Pokemon(
    pokeData.name,
    pokeData["stats"][4].base_stat,
    pokeData["stats"][5].base_stat,
    arrAbs
    )
    let pokemon55 = document.getElementById("pokemon5");
    pokemon55.innerText = ` ${t2Name}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon5.name)}
                            Attack : ${pokemon5.attackPower}
                            HP  : ${pokemon5.healthPoint}
                            Abilities : ${pokemon5.abilities}`;



})
.catch(function(error){
    console.log(error);
})
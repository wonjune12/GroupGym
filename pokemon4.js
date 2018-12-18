"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/567/")
.then(function (response){

    let pokeData = response.data;
    var arrAbs = [];    
    for (let i = 0; i < response.data.abilities.length; i++){
        arrAbs.push(response.data.abilities[i].ability.name)
    }
    let pokemon4 = new Pokemon(
    pokeData.name,
    pokeData["stats"][4].base_stat,
    pokeData["stats"][5].base_stat,
    arrAbs
    )

    let pokemon44 = document.getElementById("pokemon4");
    pokemon44.innerText = ` ${t2Name}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon4.name)}
                            Attack : ${pokemon4.attackPower} 
                            HP  : ${pokemon4.healthPoint} 
                            Abilities : ${pokemon4.abilities}`;


})
.catch(function(error){
    console.log(error);
});
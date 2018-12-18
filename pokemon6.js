"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/409/")
.then(function (response){

    let pokeData = response.data;
    var arrAbs = [];    
    for (let i = 0; i < response.data.abilities.length; i++){
        arrAbs.push(response.data.abilities[i].ability.name)
    }

    let pokemon6 = new Pokemon(
    pokeData.name,
    pokeData["stats"][4].base_stat,
    pokeData["stats"][5].base_stat,
    arrAbs
    )

    let pokemon66 = document.getElementById("pokemon6");
    pokemon66.innerText = ` ${t2Name}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon6.name)}
                            Attack : ${pokemon6.attackPower}
                            HP  : ${pokemon6.healthPoint}
                            Abilities : ${pokemon6.abilities}`;



})
.catch(function(error){
    console.log(error);
});
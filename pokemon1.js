"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/387/")
.then(function (response){

    let pokeData = response.data;
    var arrAbs = [];    
    for (let i = 0; i < response.data.abilities.length; i++){
        arrAbs.push(response.data.abilities[i].ability.name)
    }
    let pokemon1 = new Pokemon(
    pokeData.name,
    pokeData["stats"][4].base_stat,
    pokeData["stats"][5].base_stat,
    arrAbs
    )
    let pokemon11 = document.getElementById("pokemon1");
    pokemon11.innerText = ` ${t1Name}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon1.name)}
                            Attack : ${pokemon1.attackPower} 
                            HP  : ${pokemon1.healthPoint} 
                            Abilities : ${pokemon1.abilities}`;
})
.catch(function(error){
    console.log(error);
});
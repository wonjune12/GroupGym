"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/393/")
.then(function (response){

    let pokeData = response.data;
    var arrAbs = [];    
    for (let i = 0; i < response.data.abilities.length; i++){
        arrAbs.push(response.data.abilities[i].ability.name)
    }

    let pokemon3 = new Pokemon(
    pokeData.name,
    pokeData["stats"][4].base_stat,
    pokeData["stats"][5].base_stat,
    arrAbs
    )
    let pokemon33 = document.getElementById("pokemon3");
    pokemon33.innerText = ` ${t1Name}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon3.name)}
                            Attack : ${pokemon3.attackPower}
                            HP  : ${pokemon3.healthPoint}
                            Abilities : ${pokemon3.abilities}`;

})
.catch(function(error){
    console.log(error);
});
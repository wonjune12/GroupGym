"use strict";

class Pokemon{
    constructor(name,attackPower,healthPoint,abilities){
        this.name = name;
        this.attackPower = attackPower;
        this.healthPoint = healthPoint;
        this.abilities = abilities;
    }
}

let tName = localStorage.getItem("key");

function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1);
}

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
    let pokemon44 = document.getElementById("pokemon1");
    pokemon44.innerText = ` ${tName}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon1.name)}
                            Attack : ${pokemon1.attackPower} 
                            HP  : ${pokemon1.healthPoint} 
                            Abilities : ${pokemon1.abilities}`;
})
.catch(function(error){
    console.log(error);
});

axios.get("https://pokeapi.co/api/v2/pokemon/390/")
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
    let pokemon55 = document.getElementById("pokemon2");
    pokemon55.innerText = ` ${tName}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon2.name)}
                            Attack : ${pokemon2.attackPower}
                            HP  : ${pokemon2.healthPoint}
                            Abilities : ${pokemon2.abilities}`;
})
.catch(function(error){
    console.log(error);
})

axios.get("https://pokeapi.co/api/v2/pokemon/393/")
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
    let pokemon66 = document.getElementById("pokemon3");
    pokemon66.innerText = ` ${tName}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon3.name)}
                            Attack : ${pokemon3.attackPower}
                            HP  : ${pokemon3.healthPoint}
                            Abilities : ${pokemon3.abilities}`;

})
.catch(function(error){
    console.log(error);
});

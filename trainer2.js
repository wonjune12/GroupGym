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
                            Name : ${capitalizeFirstLetter(pokemon4.name)}
                            Attack : ${pokemon4.attackPower} 
                            HP  : ${pokemon4.healthPoint} 
                            Abilities : ${pokemon4.abilities}`;
})
.catch(function(error){
    console.log(error);
});

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
    let pokemon55 = document.getElementById("pokemon2");
    pokemon55.innerText = ` ${tName}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon5.name)}
                            Attack : ${pokemon5.attackPower}
                            HP  : ${pokemon5.healthPoint}
                            Abilities : ${pokemon5.abilities}`;
})
.catch(function(error){
    console.log(error);
})

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
    let pokemon66 = document.getElementById("pokemon3");
    pokemon66.innerText = ` ${tName}'s Pokemon
                            Name : ${capitalizeFirstLetter(pokemon6.name)}
                            Attack : ${pokemon6.attackPower}
                            HP  : ${pokemon6.healthPoint}
                            Abilities : ${pokemon6.abilities}`;

})
.catch(function(error){
    console.log(error);
});


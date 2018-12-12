"use strict";


// let hoverEvent = document.querySelectorAll("#pokeball-icon.jpg");
// for (let i =0; i < hoverEvent.length; i++){
//     hoverEvent[i].addEventListener("mouseover",(event)=>{
//         // hoverEvent.classList.toggle("icon.hover");
//         hoverEvent.src = "Piplup.png";
//     })
// }


// const axios = require("axios");
class Trainer{
    constructor(name,pokemonArr){
        this.name = name;
        this.pokemonArr = [];
    }
    add(pokemon){
        this.pokemonArr.push(pokemon);
    }
}
class Pokemon{
    constructor(name,attackPower,healthPoint,abilities,types){
        this.name = name;
        this.attackPower = attackPower;
        this.healthPoint = healthPoint;
        this.abilities = abilities;
        this.types = types;
    }
}

let trainer = new Trainer();

// const axios = require('axios'); 
axios.get("http://fizal.me/pokeapi/api/387.json")
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
    arrAbs,
    pokeData.types[0].type.name
    )
    let pokemon11 = document.getElementById("pokemon1");
    pokemon11.innerText = ` Name : ${pokemon1.name}
                            Attack : ${pokemon1.attackPower}
                            HP  : ${pokemon1.healthPoint}
                            Abilities ${pokemon1.abilities}`;

    trainer.add(pokemon1);

})
.catch(function(error){
    if(error.response){
        console.log(error);
    }
    console.log(error);
});

axios.get("http://fizal.me/pokeapi/api/390.json")
.then(function (response){

    let pokeData = response.data;
    var arrAbs = [];    
    for (let i = 0; i < response.data.abilities.length; i++){
        arrAbs.push(response.data.abilities[i].ability.name)
    }

    let pokemon2 = new Pokemon(
    pokeData.name,
    pokeData["stats"][4].base_stat,
    pokeData["stats"][5].base_stat,
    arrAbs,
    pokeData.types[0].type.name
    )
    let pokemon22 = document.getElementById("pokemon2");
    pokemon22.innerText = ` Name : ${pokemon2.name}
                            Attack : ${pokemon2.attackPower}
                            HP  : ${pokemon2.healthPoint}
                            Abilities ${pokemon2.abilities}`;
    


})
.catch(function(error){

    console.log(error);
})



axios.get("http://fizal.me/pokeapi/api/393.json")
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
    arrAbs,
    pokeData.types[0].type.name
    )
    let pokemon33 = document.getElementById("pokemon3");
    pokemon33.innerText = ` Name : ${pokemon3.name}
                            Attack : ${pokemon3.attackPower}
                            HP  : ${pokemon3.healthPoint}
                            Abilities ${pokemon3.abilities}`;


})
.catch(function(error){
    if(error.response){
        console.log(error);
    }
    console.log(error);
});

// let trainer = new Trainer();
// trainer.add(pokemon1);
// trainer.add(pokemon2);
// trainer.add(pokemon3);
// console.log(trainer);
// trainer.add(pokemon);
// divs.innerHTML = trainer;

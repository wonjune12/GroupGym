"use strict";

// moved class to adhere to project requirement of different js files
class Pokemon{
    constructor(name,attackPower,healthPoint,abilities){
        this.name = name;
        this.attackPower = attackPower;
        this.healthPoint = healthPoint;
        this.abilities = abilities;
    }
}

// moved from wonjunLibrary js
let t1Name = localStorage.getItem("first");
// moved from trainer2 js
let t2Name = localStorage.getItem("second");

function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1);
}

var clickEvent = document.querySelector("button");
var showRow = document.querySelector(".row");
var randomPage = document.getElementById("pokemonPage");
clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("first",document.getElementById("trainer-name1").value); 
    localStorage.setItem("second",document.getElementById("trainer-name2").value); 
    showRow.classList.add("slideDown");
    randomPage.href = "./pokemon"+Math.ceil(Math.random()*6)+".html";
})


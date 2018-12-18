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

var clickEvent = document.querySelector("button");
var showRow = document.querySelector(".row");
var randomPage = document.getElementById("pokemonPage");
clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("first",document.getElementById("trainer-name1").value); 
    localStorage.setItem("second",document.getElementById("trainer-name2").value); 
    showRow.classList.add("slideDown");
    randomPage.href = "./pokemon"+Math.ceil(Math.random()*6)+".html";
})


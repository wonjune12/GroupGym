"use strict";

var clickEvent = document.querySelector("button");
var showRow = document.querySelector(".row");
clickEvent.addEventListener("click",(event)=>{
    showRow.classList.add("slideDown");
})


// var hoverEvent = document.querySelectorAll(".landing");


// hoverEvent.addEventListener("mouseover",(event)=>{
//     hoverEvent[i].classList.add("hover");
// })

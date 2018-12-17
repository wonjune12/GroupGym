"use strict";

var clickEvent = document.querySelector("button");
var showRow = document.querySelector(".row");
clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("first",document.getElementById("trainer-name1").value); 
    localStorage.setItem("second",document.getElementById("trainer-name2").value); 
    showRow.classList.add("slideDown");
})


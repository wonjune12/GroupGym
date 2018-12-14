"use strict";

var clickEvent = document.querySelector("button");
var showRow = document.querySelector(".row");
clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("key",document.getElementById("trainer-name").value); 
    showRow.classList.add("slideDown");
})


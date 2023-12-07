"use strict";

window.onload = init();
function init() {
    createUserDropdown();
}

//Create ID, Form & Fetch Data 
function createUserDropdown() {
    let dropdown=document.getElementById("userDropdown");
    const baseURL="http://localhost:8083/api/users";
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        data.forEach(data => {
            const userName=document.createElement("option");
            userName.textContent= data.name;
            userName.value= data.id;
            dropdown.appendChild(userName);
        })
    })
  
}
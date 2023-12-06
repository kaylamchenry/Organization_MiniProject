"use strict";

window.onload = init();

function getUserTasks() {
    // Get the selected user's ID from the dropdown
    let selectedUserId = document.getElementById("userDropdown").value;

//label the variables
function fetchData(_endpointResource) {
    const baseURL = "https://api.weather.gov/";
    const endpointResource = "weather.gov";
    const searchValue = "";
    const api_key = "";

//fetch api data 
    fetch(baseURL + endpointResource).then((response) =>
      response.json().then((data) => displayData(data))
    );
  }

//display data
  function displayData(_data) {
    console.log(data);
  }
  fetchData("weather.gov");}

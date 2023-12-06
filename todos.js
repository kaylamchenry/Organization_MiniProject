"use strict";

window.onload = init();

function getUserTasks() {
    // Get the selected user's ID from the dropdown
    let selectedUserId = document.getElementById("userDropdown").value;
    const baseURL = "http://localhost:8083/";
    const endpointResource = "api/todos/byuser/";


    function fetchData(endpointResource) {
      const baseURL = "http://localhost:8083/api/todos/byuser/";
      fetch(baseURL + endpointResource)
          .then(response => response.json())
          .then(data => displayData(data))
    }
  
    function displayData(data) {
      let todoTasksDiv = document.getElementById("todoTasks");
      todoTasksDiv.innerHTML = "<h2>ToDo Tasks</h2>";
      
      if (data.length > 0) {
          data.forEach(task => {
              todoTasksDiv.innerHTML += `<p>${task.title}</p>`;
          });
      } else {
          todoTasksDiv.innerHTML += "<p>No tasks found for the selected user.</p>";
      }
  }

  function getUserTasks() {
      let selectedUserId = document.getElementById("userDropdown").value;
      fetchData(`todos/byuser/${selectedUserId}`);

  
  }}

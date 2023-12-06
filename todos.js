"use strict";

window.onload = init();

function getUserTasks() {
    // Get the selected user's ID from the dropdown
    var selectedUserId = document.getElementById("userDropdown").value;

    // Make an AJAX request or fetch API to retrieve ToDo tasks based on the selected user's ID
    // Replace the following placeholder code with actual logic to fetch ToDo tasks
    // For example, you can use the fetch API as shown below
    fetch(`/api/todotasks?userId=${selectedUserId}`)
        .then(response => response.json())
        .then(data => {
            // Display ToDo tasks in the todoTasks div
            var todoTasksDiv = document.getElementById("todoTasks");
            todoTasksDiv.innerHTML = "<h2>ToDo Tasks</h2>";
            
            if (data.length > 0) {
                data.forEach(task => {
                    todoTasksDiv.innerHTML += `<p>${task.title}</p>`;
                });
            } else {
                todoTasksDiv.innerHTML += "<p>No tasks found for the selected user.</p>";
            }
        })
        .catch(error => console.error('Error fetching ToDo tasks:', error));
}
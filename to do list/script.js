// script.js
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';

    // Mark as completed
    listItem.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            listItem.classList.toggle('completed');
        }
    });

    // Delete task
    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });
});

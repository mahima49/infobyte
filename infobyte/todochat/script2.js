// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

// Delete a task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Toggle task completion
taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('completed');
    }
});

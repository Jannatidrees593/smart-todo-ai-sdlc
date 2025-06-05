document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = ''; // Clear input field
        taskInput.focus();
    };

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // --- AI Simulation Comment ---
    // The following code block structure could be conceptually generated
    // by an AI assistant like GitHub Copilot based on the requirements.
    /*
    Copilot suggestion example:
    function loadTasks() {
        // Code to load tasks from local storage (if implemented)
    }
    function saveTasks() {
        // Code to save tasks to local storage (if implemented)
    }
    loadTasks(); // Load tasks on page load
    */
    // Note: Local storage persistence is not implemented in this basic version.
});

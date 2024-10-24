function addTask() {
    let taskText = document.getElementById('taskInput').value;
    if (taskText.trim()) {
        let li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        li.ondblclick = function() {
            editTask(li);
        };
        document.getElementById('taskList').appendChild(li);
        document.getElementById('taskInput').value = '';
    }
}

function removeTask(button) {
    let li = button.parentElement;
    document.getElementById('taskList').removeChild(li);
}

function editTask(li) {
    let newText = prompt("Edit task:", li.firstChild.textContent.trim());
    if (newText && newText.trim()) {
        li.firstChild.textContent = newText;
    }
}
